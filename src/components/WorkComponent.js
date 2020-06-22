import React from 'react';

const WorkComponent = (props) => {
  return (
    <section className="section-wrapper section-interest gray-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Work</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="expertise-item">
              <h3><a href="https://sov.tech">SovTech</a></h3>
              <h4>Full Stack Lead Developer</h4>
              <small>Jan 2018 - Jan 2020</small>

              <p>South Africa, Randburg</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12">
            <div className="expertise-item">
              <h3><a href="https://donaldpakkies.com">Freelancing</a></h3>
              <h4>Full Stack Developer</h4>

              <small>Jan 2020 - current</small>
              <p>South Africa</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkComponent;
