import eye from "../../assets/eyesight.png"
import "./Header.scss"
import eclipse from "../../assets/eclipse.png"
import eclipse2 from "../../assets/eclipse2.png"
import {Button, Card, Form} from "react-bootstrap";

export const Header = () => {

    return(
        <div className="header-container">
            {/* <img className="e1" src={eclipse} alt="" /> */}
            <img className="e2" src={eclipse2} alt="" />
            <img className="e3" src={eclipse} alt="" />
            <div className="header-text">
                <p>OptiScan</p>
                <h1>Cataract Detector</h1>
                <p style={{opacity: '50%', fontSize: '0.9rem'}}>Designed to deliver instant preliminary results, our tool uses advanced image analysis to identify signs of cataract development.</p>
                <Button className="mt-3" variant="primary" type="submit">
                    Try Now!
                </Button>
            </div>
            <div className="header-image">
                <img className="image" src={eye} alt="" />
            </div>

        </div>
    )

}

export default Header;