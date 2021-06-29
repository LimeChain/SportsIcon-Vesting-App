import React, { useState } from 'react';
import { InfoIcon } from "../../Vectors/InfoIcon";

function InfoPopup({ text, widthRestriction, modifiers, mouseEvents }) {
  const [hoverIcon, setHoverIcon] = useState(false)
  return (
    <div className={`info data-container ${modifiers ? modifiers : ''}`} >
      <div
        onMouseOver={() => { if (mouseEvents) setHoverIcon(true) }}
        onMouseOut={() => { if (mouseEvents) setHoverIcon(false) }}
        className={`popup ${widthRestriction ? 'width-restriction' : ''}`} aria-haspopup>
        <InfoIcon color={(hoverIcon || !mouseEvents) ? '' : 'white'} />
        <div className="text-container" data-text={text}></div>
      </div>
    </div>
  )
}

export default InfoPopup;