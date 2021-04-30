import React , {useState, useEffect} from 'react';
import SingleComplement from './SingleComplement';
import Values from 'values.js'

function Complement({complementShades, colorComplement, isRgb}) {
    // const [ComplementShades, setComplementShades] = useState([])
    // const secShades = new Values(`${colorComplement}`).all(10)
    // console.log(secShades);
    // setComplementShades(secShades)
    // console.log(colorComplement);
    return (
    <>
        <div className="secondary-divider"></div>
        <header>
            <div className='info'>
                <h2 className='light-header'>Complement</h2>
                <div className="primary-color" style={{borderColor: `${colorComplement}`}}><p>{isRgb? 'rgb': 'hex'}</p></div>
            </div>
        </header>
        <div className="secondary-shades">
            {
                complementShades.map((compShade, index) => {
                    // console.log(compShade);
                    return (
                        <div className="secondary-shade">
                        < SingleComplement key={index} compShade={compShade} index={index} compRgb={compShade.rgb} isRgb={isRgb}/>  
                        </div>
                    )
                })
            }
        </div>   
    </>
    )
}

export default Complement
