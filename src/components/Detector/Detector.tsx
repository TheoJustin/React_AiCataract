import {ChangeEvent, FormEvent, useState} from "react";
import React from "react";
import {Button, Card, Form} from "react-bootstrap";

const Detector = () => {
    const [ isDone, setIsDone ] =  useState(false);

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
            setIsDone(isDone => true)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) {
            setFile(fileList[0]);
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

            <Card className="mx-5 my-5">
                <Form className="mx-5 my-5" onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3" >
                        <Form.Label className="form-label">Upload Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />

                        <Button variant="primary" type="submit">
                            Upload
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    }

    return (
        // <div>
        //     {/*<form onSubmit={handleSubmit}>*/}
        //     {/*    <input*/}
        //     {/*        type="file"*/}
        //     {/*        onChange={handleFileChange}*/}
        //     {/*    />*/}
        //     {/*    <button type="submit">Predict</button>*/}
        //     {/*</form>*/}
        //
        //     <Card className="mx-5 my-5">
        //         <Form className="mx-5 my-5" onSubmit={handleSubmit}>
        //             <Form.Group controlId="formFile" className="mb-3" >
        //                 <Form.Label className="form-label">Upload Image</Form.Label>
        //                 <Form.Control type="file" onChange={handleFileChange} />
        //
        //                 <Button variant="primary" type="submit">
        //                     Upload
        //                 </Button>
        //             </Form.Group>
        //         </Form>
        //     </Card>
        // </div>

        <div onClick={() => setIsDone(isDone => false)}>uddhddhd</div>
    );
}
export default Detector;