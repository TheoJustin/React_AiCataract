import React, { useState } from "react";
import "./TeamImage.scss";

interface TeamImageProps {
    imageName: string;
    imageUrl: string;
    imageDescription: string;
}

const TeamImage: React.FC<TeamImageProps> = ({ imageName, imageUrl, imageDescription }) => {
    return (
        <div className="img-container-team">
            <img src={imageUrl} alt={imageName} className="team-img"/>
            <div className="team-name">{imageName}</div>
            <div className="team-nim">{imageDescription}</div>
        </div>
    );
};


export default TeamImage;
