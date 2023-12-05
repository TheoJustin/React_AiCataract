import eye from "../../assets/eyesight.png"
import "./Header.scss"
import eclipse from "../../assets/eclipse.png"
import eclipse2 from "../../assets/eclipse2.png"
import {Button, Card, Form} from "react-bootstrap";
import { IoArrowDown } from "react-icons/io5";
import Detector from "../Detector/Detector";


interface HeaderProps {
    detectorRef: React.RefObject<HTMLDivElement>;
}
export const Header: React.FC<HeaderProps> = ({ detectorRef }) => {
    const scrollToDetector = () => {
        const topPosition = detectorRef.current?.offsetTop || 0;

        // Scroll to the element with an offset of -50 pixels
        window.scrollTo({
            top: topPosition - 200,
            behavior: 'smooth',
        });
    };

    return(
        <div className="header-container">
            {/* <img className="e1" src={eclipse} alt="" /> */}
            <img className="e2" src={eclipse2} alt="" />
            <img className="e3" src={eclipse} alt="" />
            <div className="header-text">
                <p>OptiScan</p>
                <h1>Cataract Detector</h1>
                <p style={{opacity: '50%', fontSize: '0.9rem'}}>Designed to deliver instant preliminary results, our tool uses advanced image analysis to identify signs of cataract development.</p>
                <Button className="mt-3" variant="primary" type="submit" onClick={scrollToDetector}>
                    Try Now
                    <IoArrowDown className="icon" />
                </Button>
            </div>
            <div className="header-image">
                <img className="image" src={eye} alt="" />
            </div>

        </div>
    )

}

export default Header;