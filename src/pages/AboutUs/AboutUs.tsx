import React, { useState } from "react";
import "./AboutUs.scss";
import candy from "../../assets/dummy-image-square.jpg";
import vella from "../../assets/dummy-image-square.jpg";
import carissa from "../../assets/dummy-image-square.jpg";
import theo from "../../assets/dummy-image-square.jpg";
import jose from "../../assets/dummy-image-square.jpg";
import jordan from "../../assets/dummy-image-square.jpg";
import TeamImage from "../../components/TeamImage/TeamImage";
import {NavigationBar} from "../../components/Navbar/NavigationBar";

const AboutUs = () => {
    return (
        <div>
            <NavigationBar />
            <div className="what-we-do-container">
                <div className="what-we-do-header">What we do</div>
                <div className="what-we-do-text">
                    The website hosts an advanced AI tool designed to distinguish between
                    normal eyes and those affected by cataracts. Utilizing sophisticated
                    image analysis algorithms, users can upload eye images for evaluation.
                    The AI quickly assesses these images, identifying signs of cataracts
                    with high accuracy (80% Accuracy and depends on the image quality).
                    This service aims to provide an easy, accessible means for preliminary
                    eye health screening, helping users to seek timely medical advice if
                    cataract symptoms are detected. The website is intended as a
                    supportive resource, not a replacement for professional medical
                    diagnosis.
                </div>
                <div className="what-we-do-header">Our Team</div>
                <div className="img-container">
                    <TeamImage imageUrl={theo} imageName="Theo Justin" imageDescription="2602095915"/>
                    <TeamImage imageUrl={jose} imageName="Jose Jonathan" imageDescription="2602161192"/>
                    <TeamImage imageUrl={carissa} imageName="Carissa Fabellina" imageDescription="2602071120"/>
                    <TeamImage imageUrl={candy} imageName="Candy Valencia" imageDescription="2602168961"/>
                    <TeamImage imageUrl={vella} imageName="Marvella Shera" imageDescription="2602091040"/>
                    <TeamImage imageUrl={jordan} imageName="Jordan Josdaan" imageDescription="2602170455"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
