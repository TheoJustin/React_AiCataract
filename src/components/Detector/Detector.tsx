import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import CataractImg from '../../assets/image_251.png'
import './Detector.scss'

interface ResultProps {
    prediction: string;
    prediction_accuracy: number;
}

const Detector: React.FC = () => {
    const [ isDone, setIsDone ] =  useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [result, setResult] = useState<ResultProps | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log(data); // Process the response data as needed
            setResult({
                prediction: data.prediction === "normal"? "Normal" : "Cataract",
                prediction_accuracy: Number((data.prediction_accuracy * 100).toFixed(2)),
            });
            setIsDone(isDone => true)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) {
            setFile(fileList[0]);

            // Create a temporary URL for the selected image
            const imageUrl = URL.createObjectURL(fileList[0]);

            // Set the image preview URL in the state
            setImagePreview(imageUrl);
        }
    };

    if(!isDone){
        return <div>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input*/}
            {/*        type="file"*/}
            {/*        onChange={handleFileChange}*/}
            {/*    />*/}
            {/*    <button type="submit">Predict</button>*/}
            {/*</form>*/}

            <Card className="rounded-4 card-cont shadow border-0">
                <div className="row g-0 mx-5 my-5">
                    <div className="col-md-4 animation">
                        <img src={CataractImg} className="img-fluid rounded-3 mb-3"/>
                        <div className="text-cont">
                            <div className="text">
                                Prediction: Cataract Accuracy: 99%
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <Form className="ms-5 my-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label className="form-label mb-4">Try Our Cataract Detector by Uploading an Image Here!</Form.Label>
                                <Form.Control type="file" onChange={handleFileChange} />

                                <Button className="mt-3" variant="primary" type="submit">
                                    Upload
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Card>
        </div>
    }

    return (
        <div>
           <Card className="rounded-4 card-cont shadow border-0">
                <div className="row g-0 mx-5 my-5">
                    <div className="col-md-4 animation">
                        {imagePreview && (
                            // Display the image preview if available
                            <img src={imagePreview} className="img-fluid rounded-3 mb-3" alt="Selected Eye" />
                        )}
                    </div>

                    <div className="col-md-8 result-cont">
                        <div className="result-text ms-5 mt-5">
                            <h2>Prediction: {result?.prediction}</h2>
                            <h2>Accuracy: {result?.prediction_accuracy}%</h2>
                        </div>

                        <p className="ms-5 mt-4" onClick={() => setIsDone(isDone => false)}>Take the Test Again</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Detector;