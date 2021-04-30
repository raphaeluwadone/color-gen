import React, {useState, useEffect} from 'react'

function SingleColor({hex, index, isRgb, rgb}) {
    const [copied, setCopied] = useState(false)

    const copyToBoard = () => {
        if(isRgb) {
            navigator.clipboard.writeText(rgb)
        }
        else navigator.clipboard.writeText(hex)
        setCopied(true)
    }


    useEffect(() => {
        const time = setTimeout(() => {
            setCopied(false)
        }, 4000);
    }, [copied])

    return (
    <>
        <div className="single-shade" style={{backgroundColor: `#${hex}`, cursor:'pointer'}} onClick={copyToBoard}>
        {
            !copied ? <p style={{color: (index > 10)? '#fff': '#000'}}>{isRgb?`rgb(${rgb})`:`#${hex}`}</p> : <p style={{fontWeight: "bolder", color: (index > 10)? '#fff': '#000'}}>Copied !</p>
        }
        </div>
    </>
    )
}

export default SingleColor
