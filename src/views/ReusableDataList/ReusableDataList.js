const ReusableDataList = ({ data }) => {
    return (
        <div className="dataForm">
            {data.map((element, i) => 
                <div key={i} style={element.style} className='reusableDiv'>
                    {element.text}
                </div>
            )}
        </div>
    )
}

export default ReusableDataList;