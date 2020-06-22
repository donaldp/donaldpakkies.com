import React from 'react';

const InterestsComponent = (props) => {
  return (
    <section className="section-wrapper section-interest gray-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Interests</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="content-item">
              <h3>Shows/Series</h3>

              <p>Ozark, Lucifer, Grimm, Game of Thrones, Dexter, The Walking Dead, Limitless, Shameless, Brooklyn Nine-Nine, Mr Iglesias, StarGirl, Space Force.</p>
            </div>

            <div className="content-item">
              <h3>Games</h3>

              <p>Fortnite, FIFA, Grand Theft Auto, Red Dead Redemption, Forza, Assassin's Creed, Far Cry.</p>
            </div>

            <div className="content-item">
              <h3>Music</h3>

              <p>Queen, Guns N' Roses, NAV, AC/DC, Drake, Phora, A-Reece, Travis Scott, Logic, Majid Jordan, La Paris, Mura Masa, Russ, Monxx, The Weeknd.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default InterestsComponent;