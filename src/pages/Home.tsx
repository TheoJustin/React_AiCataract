import '../pages/Home.scss';
import cataract from '../assets/image_251.png';
import normal from '../assets/image_256.png';
import {NavigationBar} from "../components/Navbar/NavigationBar";
import Detector from "../components/Detector/Detector";

function Home() {
  return (
    <div className="home">
        <NavigationBar />
        <Detector />

        <div className="what-is-cataract info">
            <h1>What is cataract?</h1>
            <p>Cataract is a clouding or opacification of the normally clear lens of the eye or its capsule (surrounding transparent membrane) that obscures the passage of light through the lens to the retina of the eye. This blinding disease can affect infants, adults, and older people, but it predominates the latter group. It can be bilateral and vary in severity. The disease process progresses gradually without affecting daily activities early on, but with time, especially after the fourth or fifth decade, the cataract will eventually mature, making the lens completely opaque to light interfering with routine activities. Cataracts are a significant cause of blindness worldwide.</p>
        </div>

        <div className="info">
            <h1>What are the symptoms of cataracts?</h1>
            <ul>
                <li>Vision that’s cloudy, blurry, foggy or filmy.</li>
                <li>Changes in the way you see color (colors may look faded or not as vivid).</li>
                <li>Sensitivity to bright sunlight, headlights or lamps.</li>
                <li>Glare, including halos or streaks that form around lights.</li>
                <li>Difficulty seeing at night.</li>
                <li>Changes in your vision prescription, including near-sightedness that gets worse.</li>
                <li>Needing a brighter light to read.</li>
                <li>Double vision.</li>
            </ul>
        </div>

        <div className="info">
            <h1>How to Treat Cataract?</h1>
            <p>Cataracts can be removed only with surgery.<br/><br/>If your cataract symptoms are not bothering you very much, you don’t have to remove a cataract. You might just need a new eyeglass prescription to help you see better. You should consider surgery when cataracts keep you from doing things you want or need to do.</p>
        </div>
    </div>
  );
}

export default Home;
