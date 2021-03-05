import React from 'react';
import './MissionStatement.css';

export class MissionStatement extends React.Component {
  render() {
    return (
      <div className="missionStatement">
        <div className="missionText">
          <p>
            PETRICHOR IS A PALATABLE SENSORY EXPERIENCE THAT REPRESENTS A CONNECTION BETWEEN THE RICHNESS OF THE NATURAL ENVIRONMENT WE ARE GROUNDED BY, AND PRESENCE IN BODY, MIND, AND SPIRIT.
          </p>
          <p>
            THESE THREE IDEAS; ORGANIZE, GALVANIZE, AND PETRICHOR ARE THE MISSION AND CALL TO ACTION FOR UNITY AND INCLUSIVENESS BEHIND THE COMMUNITY THAT OGP IS.
          </p>
          <p>
            THE COMMUNITY EMPHASIZES ACKNOWLEDGEMENT, ADMIRATION, GRATITUDE, PASSION, MULTIFACETED CREATIVITY, AND CONNECTION TO OUR NATURAL ENVIRONMENT.
          </p>
        </div>
        <div>
          <p className="catalogIndicator">CATALOG</p>
          <p className="arrow down"></p>
        </div>
      </div>
    )
  }
}
