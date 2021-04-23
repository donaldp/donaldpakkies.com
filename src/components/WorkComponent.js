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

              <div className="row" style={{ paddingLeft: '20px' }}>
                <div className="col-md-12">
                   <div className="expertise-item">
                    <strong><a href="https://www.fincheck.co.za/">Fincheck / MyFincheck</a></strong>

                    <br/>
                    Lead Backend Developer - API Development, Payment Gatway & Credit Bureau API's Integration, DevOps, Code Reviews
                  </div>

                  <div className="expertise-item">
                    <strong><a href="https://reachforadream.org.za/">Reach for a Dream</a></strong>

                    <br/>
                    Full Stack Developer - Maintenance & Bug fixes
                  </div>

                  <div className="expertise-item">
                    <strong><a href="https://www.yalu.co.za/">Yalu</a></strong>

                    <br/>
                    Full Stack Developer - Maintenance & Bug fixes, Code Reviews
                  </div>
                </div>
              </div>

              <small>Jan 2018 - Jan 2020</small>

              <p>South Africa, Randburg</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12">
            <div className="expertise-item">
              <h3><a href="https://www.prepaidmeters.co.za/">Prepaid Meters</a></h3>
              <h4>Backend Developer</h4>

              <div className="row" style={{ paddingLeft: '20px' }}>
                <div className="col-md-12">
                   <div className="expertise-item">
                    <strong>MVC Framework</strong>

                    <br/>
                    Backend Development - Custom web Framework Development
                  </div>
                </div>
              </div>

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

              <div className="row" style={{ paddingLeft: '20px' }}>
                <div className="col-md-12">
                   <div className="expertise-item">
                    <strong>Financial Fitness Bunnies Chatbot</strong> @ SmartMacmane

                    <br/>
                    Full Stack Developer - Twilio Integration, Chat Flow & Backend / Dashboard Development, DevOps
                  </div>

                  <div className="expertise-item">
                    <strong><a href="https://spotmoney.com">Spot Money</a></strong> @ WiGroup

                    <br/>
                    Frontend Developer - Offers Components & Dashboard Development
                  </div>

                  <div className="expertise-item">
                    <strong><a href="https://www.weareegg.co.za/">We are EGG</a></strong> @ LT

                    <br/>
                    Lead Backend Developer - Backend / Portal & API Development, SQS & Xero Integration, DevOps
                  </div>
                </div>
              </div>

              <small>current</small>
              <p>South Africa</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkComponent;
