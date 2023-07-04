import React from 'react';
import '../../css/techIconStyle.css';
import '../../css/testingDivs.css';
import '../../css/content.css';

function About() {
  return (
    <div className='home'>
      <header class="navbar">
        <a href="/" class="navbar-link">Home</a>
        <a href="/about" class="navbar-link">About</a>
      </header>
      <div className='content'>
        <h1> My Work</h1>
        <div className='content'>
                  I spend the last year working as a freelancer dev, and I'm ready to work for <br />
          bigger companies and improve myself working side by side with good programmers. <br />
          I'm a fast learner and I'm the kind of person who likes to really understand what I'm <br />
          doing because the more you know, the less you struggle to do something good. <br />
          I'm a really active person, I like to solve problems and work on new ideas. I also like <br />
          to speak other languages, I'm very social and communicative. <br />
        </div>

      </div>
    </div>
  );
}

export default About;
