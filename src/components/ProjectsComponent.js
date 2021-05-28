import React from 'react';

const ProjectsComponent = (props) => {
  return (
    <section className="section-wrapper gray-bg" style={{ borderTop: '1px solid #cecece' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="expertise-item">
              <h3><a href="https://harness.obsidiandev.io">Harness</a></h3>
              <h4>MVC Framework for Imba Lang</h4>

              <p>Supports Auth, Laravel Mix, Vuejs, Liquidjs, Localization, DB Migrations, and more</p>

              <small>March 2021</small>
            </div>

            <div className="expertise-item">
              <h3><a href="https://github.com/harnessflex/schema-builder">SQL Schema Builder</a></h3>
              <h4>SQL Schema Builder</h4>

              <p>Provides a cleaner syntax for db-migrate (inspired by Laravel Eloquent)</p>

              <small>March 2021</small>
            </div>

            <div className="expertise-item">
              <h3><a href="https://github.com/harnessflex/types">Flex Types</a></h3>
              <h4>Static type checking for Imba</h4>

              <p>Enabled native static type checking with run-time errors for Imba</p>

              <small>April 2021</small>
            </div>

            <div className="expertise-item">
              <h3><a href="https://github.com/modulusphp">Modulus</a></h3>
              <h4>MVC Framework for PHP</h4>

              <p>Supports Auth, Laravel Mix, Vuejs / Reactjs, Queue workers, AWS integration, DB Migrations, and more</p>

              <small>Jan 2018</small>
            </div>

            <div className="expertise-item">
              <h3><a href="https://github.com/donaldp/xylon-studio-ide">Xylon Studio</a></h3>
              <h4>Integrated Development Environment for Windows</h4>

              <small>2013</small>
            </div>

            <div className="expertise-item">
              <h3>C Modulus</h3>
              <h4>A Programming Language that compiles to JavaScript</h4>

              <small>2016</small>
            </div>

            <div className="expertise-item">
              <h3>Audiostreamify</h3>
              <h4>A music streaming service written in C Modulus, JavaScript & PHP</h4>

              <small>2017</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectsComponent;
