import React from 'react'

function SingleComplement({compShade, index, isRgb, compRgb}) {
    
    return (
        <div className="single-shade" style={{backgroundColor: `#${compShade.hex}`}}>
            
            <p style={{color: (index > 10)? '#fff': '#000'}}>{isRgb? `rgb(${compRgb})`:`#${compShade.hex}`}</p>
        </div>
    )
}

export default SingleComplement
