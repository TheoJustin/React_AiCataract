import '../pages/Home.scss';
import cataract from '../assets/image_251.png';
import normal from '../assets/image_256.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            <li>
                <a href='#tes'>Home</a>
                <a href='#tes'>Ai Detection</a>
                <a href='#tes'>Hospitals</a>
                <a href='#tes'>About Us</a>
            </li>
            <li><h1>Mata Sehat: Platform Pendeteksi Katarak</h1></li>
        </ul>

        <div className='content'>
            <h1>Gejala</h1>
            <div className='cataract-img'>
                <img src={cataract} alt="Cataract" />
                <img src={normal} alt="Cataract" />
            </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
