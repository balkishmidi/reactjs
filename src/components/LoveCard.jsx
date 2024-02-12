import React, { useState } from 'react';

function LoveCard() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const openEnvelope = () => {
    setShowCard(true);
  };

  const closeEnvelope = () => {
    setShowCard(false);
  };

  return (
    <div className="bg-wrapper">
      <div className={`envelope-wrapper ${showCard ? 'flap' : ''}`}>
        <div className="envelope" onClick={toggleCard}>
          <div className="card">
            <span className="fa fa-close close-icon" onClick={closeEnvelope}></span>
            <div className="text">I Love you Boo .</div>
          </div>
        </div>
        <div className="heart" onClick={openEnvelope}></div>
      </div>
    </div>
  );
}

export default LoveCard;
