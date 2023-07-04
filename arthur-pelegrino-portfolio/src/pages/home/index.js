import React from 'react';
import Lottie from 'react-lottie';
import ReactImage from './images/ReactImage.json';
import javaImage from './images/java-script.png'
import pythonImage from './images/python.png'
import mySqlImage from './images/mysql.png'
import '../../css/techIconStyle.css';
import '../../css/testingDivs.css';
import '../../css/content.css';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: ReactImage,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Home() {
  return (
    <div className='home'>
      <header class="navbar">
        <a href="/" class="navbar-link">Home</a>
        <a href="/about" class="navbar-link">About</a>
      </header>
      <div className='content'>
        <h1>Welcome to my portfolio!</h1>

        <h5>
                    Hello, my name is Arthur. I'm a Full-Stack developer. 
                    <br />
                    Just scroll down and you will be able to see some of my
                     <br />
                    projects, techlonogies and competences! :D
        </h5>

        <ul className='list-container'>
          <li>
            React
            <Lottie options={lottieOptions} height={100} width={100} />
          </li>
          <li>
          <li>
            <div class="list-item">
              <span class="item-name">JavaScript</span>
              <img src={javaImage} height={65} width={65}></img>
            </div>
          </li>

          </li>
          <li>
          <div class="list-item">
              <span class="item-name">Python</span>
              <img src={pythonImage} height={65} width={65}></img>
            </div>
          </li>
          <li>
          <div class="list-item">
              <span class="item-name">MySql</span>
              <img src={mySqlImage} height={65} width={65}></img>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
