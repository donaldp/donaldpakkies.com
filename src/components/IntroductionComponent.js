import React from 'react';

const IntroductionComponent = (props) => {
  return (
    <section className="intro section-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>What I am all about.</h2>
            </div>
          </div>
          <div className="col-md-12">
            <p>
              Just a random "self-taught" Full-Stack Software Developer. I'm a very innovative and passionate Software
              Engineer who spent his entire childhood writing code. I like coming up with new things (like building
              a new Programming Language or creating a Web Framework) and learning new stacks.
            </p>

            <p>
              <i> ~ An active user of OSS.</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroductionComponent;
