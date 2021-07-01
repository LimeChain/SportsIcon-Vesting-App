import { InfoIcon } from "../../Vectors/InfoIcon";

function InfoPopup({ text, widthRestriction, modifiers }) {
  return (
    <div className={`info data-container ${modifiers ? modifiers : ''}`} >
      <div
        className={`popup ${widthRestriction ? 'width-restriction' : ''}`} aria-haspopup>
        <InfoIcon color='white' />
        <div className="text-container" data-text={text}></div>
      </div>
    </div>
  )
}

export default InfoPopup;