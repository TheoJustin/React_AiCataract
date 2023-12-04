from flask_cors import CORS
from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)

model = tf.keras.models.load_model('CataractModel.h5')

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Flask server is running'})

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
            try:
                image = Image.open(file.stream).convert('L')
                image = image.resize((300, 200))  # Resize to 300x200
                image = np.array(image)
                image = 255 - image  # If needed, invert colors

                # Reshape the image for the model
                # The model expects a 4D tensor: (batch_size, height, width, channels)
                # Since the image is grayscale, channels = 1
                image = image.reshape(-1, 200, 300, 1)

                # Normalize if your model expects normalized data
                image = image / 255.0

                prediction = model.predict(image)

                predicted_class = 'cataract' if prediction[0][0] > 0.5 else 'normal'

                prediction_accuracy = float(prediction[0][0]) if predicted_class == 'cataract' else 1.0 - float(prediction[0][0])

                print(prediction_accuracy)
                return jsonify({'prediction': predicted_class, 'prediction_accuracy' : prediction_accuracy})
            except Exception as e:
                print("Error occurred:", e)
                return jsonify({'error': str(e)}), 500

CORS(app)

if __name__ == '__main__':
    app.run(debug=True)
