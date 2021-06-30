function AmountPopup({ text, widthRestriction }) {
    return (
        <div 
            className={`amount popup ${widthRestriction ? 'width-restriction' : ''}`} aria-haspopup>
            <div className="text-container" data-text={text}></div>
        </div>
    )
}

export default AmountPopup;