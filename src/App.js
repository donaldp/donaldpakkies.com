import React from 'react';
import './App.css';
import { Fragment } from 'react';
import MainComponent from './components/MainComponent.js';
import InterestsComponent from './components/InterestsComponent.js';
import IntroductionComponent from './components/IntroductionComponent.js';
import WorkComponent from './components/WorkComponent.js';
import ProjectsComponent from './components/ProjectsComponent.js'
import TechStackComponent from './components/TechStackComponent';

function App() {
  return (
    <Fragment>
      <div id="preloader">
        <div id="status">
          <div className="status-mes"></div>
        </div>
      </div>

      <MainComponent>
        <IntroductionComponent />
        <WorkComponent />
        <ProjectsComponent />
        <TechStackComponent />
        <InterestsComponent />
      </MainComponent>
    </Fragment>
  );
}

/**
 * Hide preloader.
 */
window.addEventListener('load', function () {
  document.getElementById('preloader').classList.add('fadeOut');

  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 3000);
});

export default App;
