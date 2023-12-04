import '../pages/Home.scss';
import cataract from '../assets/image_251.png';
import normal from '../assets/image_256.png';
import {NavigationBar} from "../components/Navbar/NavigationBar";
import Detector from "../components/Detector/Detector";

function Home() {
  return (
    <div className="App">
        <NavigationBar />
        <Detector />
      {/*<header className="App-header">*/}


        {/*<div className='content'>*/}
        {/*    <h1>Gejala</h1>*/}
        {/*    <div className='cataract-img'>*/}
        {/*        <img src={cataract} alt="Cataract" />*/}
        {/*        <img src={normal} alt="Cataract" />*/}
        {/*    </div>*/}
        {/*</div>*/}
      {/*</header>*/}
    </div>
  );
}

export default Home;
