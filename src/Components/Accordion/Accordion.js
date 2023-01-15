import React, { useState } from 'react';

function Accordion({ title, menuItems, id }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <>

      <div className="stox-acc-break" />
      <div className="stox-accordion">
        <div className="stox-spacer" />
        <div className="stox-acc-container" onClick={() => setIsActive(!isActive)}>
          <span className="stox-acc-title" key={id}>{title}</span>
          <img className="stox-acc-icon" alt="" src={isActive ? '/assets/images/chevron-up.svg' : '/assets/images/chevron-down.svg'} />
        </div>
      </div>

      {isActive && menuItems.length ? menuItems.map((itemData, index) => (
        <div className="stox-acc-content" key={index}>
          <div className="stox-acc-content-list">
            <div className="stox-acc-content-count">{itemData.count}</div>
            <div className="stox-acc-content-items">{itemData.value}</div>
          </div>
          <div className="stox-spacer2" />
        </div>)) : ''
      }

    </>

  );
}

export default Accordion