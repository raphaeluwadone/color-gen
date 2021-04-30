import React, { useState, useEffect } from "react";
import Complement from "./Complement";
import SingleColor from "./SingleColor";
import { rgbComplimentary, hexToRgb, rgbToHex } from "./utils";
import Values from "values.js";


function App() {


  const [color, setColor] = useState("");
  const [code, setCode] = useState("");
  const [shades, setShades] = useState([]);
  const [alert, setAlert] = useState(false);
  const [isRgb, setIsRgb] = useState(false);
  // const [rgbListPrimary, setRgbListPrimary] = useState([])
  const [colorComplement, setColorComplement] = useState("");
  const [complementShades, setComplementShades] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setAlert(false);
    }, 4000);
  }, [alert]);

  useEffect(() => {
    getComplement();
  }, [shades]);

  const alertToggle = () => {
    setAlert(true);
    console.log("alert toggler");
  };

  const getComplement = () => {
    if (shades.length > 1) {
      console.log("test");
      const rgbColor = hexToRgb(color);
      const rgbComplement = rgbComplimentary(
        rgbColor.r,
        rgbColor.b,
        rgbColor.g
      );
      // console.log(rgbComplement)
      const complementHex = rgbToHex(
        rgbComplement.r,
        rgbComplement.g,
        rgbComplement.b
      );
      setColorComplement(`${complementHex}`);

      const secShades = new Values(`${complementHex}`).all(10);
      // console.log(secShades);
      setComplementShades(secShades);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const shades = new Values(color).all(10);
      // console.log(shades);
      console.log("try block");
      setShades(shades);
    } catch (error) {
      setAlert(true);
      // alertToggle()

      console.log(alert, "catch block");
    }
    // if (alert === false) {
    //   getComplement()
    // }
    // if((color.length > 4) && (alert === false)){
    //   console.log('test');
    //   const rgbColor = hexToRgb(color)
    //   const rgbComplement = rgbComplimentary(rgbColor.r, rgbColor.b, rgbColor.g)
    //   // console.log(rgbComplement)
    //   const complementHex = (rgbToHex(rgbComplement.r, rgbComplement.g, rgbComplement.b))
    //   setColorComplement(`${complementHex}`)

    //   const secShades = new Values(`${complementHex}`).all(10)
    //   // console.log(secShades);
    //   setComplementShades(secShades)

    // } else {
    //   console.log('fail');
    //   // alertToggle()
    //   setAlert(true)
    // }
  };

  // const rgbCode = (rgb) => {
  //  const finalCode = rgbToHex(rgb.r, rgb.g, rgb.b)
  //   // console.log(finalCode)
  // }
  // const changeCode = () => {
  //   // setIsRgb(!isRgb)

  //   if(isRgb){
  //     const hex = rgbCode(code)
  //     setCode(hex)
  //     // setColor(finalCode)
  //     // console.log(color);
  //     setIsRgb(false)
  //     console.log(code)
  //   }
  //   if(!isRgb) {
  //    const rgb = hexToRgb(color)
  //    setCode(rgb)
  //     setIsRgb(true)
  //     console.log(code)
  //     // setColor(finalCode)
  //   }
  // }

  return (
    <div className="body">
      {alert && (
        <div className="alert">
          <p>Please input a valid color code</p>
        </div>
      )}
      <main
        style={{
          backgroundColor: colorComplement ? `${colorComplement}` : "#000",
        }}
      >
        <header className="first">
          <div className="info">
            <h2>Primary color</h2>
            <div
              className="primary-color"
              style={{ borderColor: `${color}` }}
              onClick={() => setIsRgb(!isRgb)}
            >
              <p>{isRgb ? "rgb" : "hex"}</p>
            </div>
          </div>
          <form>
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit}>
              Generate
            </button>
          </form>
        </header>
        <div
          className="primary-shades"
          style={{ backgroundColor: `${colorComplement}` }}
        >
          {shades.map((shade, index) => {
            console.log(shade);
            return (
              <SingleColor
                shade={shade}
                key={index}
                hex={shade.hex}
                index={index}
                code={code}
                rgb={shade.rgb}
                isRgb={isRgb}
              />
            );
          })}
        </div>
        {color && (
          <div
            className="primary-divider"
            style={{ backgroundColor: `${colorComplement}` }}
          ></div>
        )}
      </main>
      <section
        className="secondary-shades"
        style={{ backgroundColor: `${colorComplement ? color : "#fff"}` }}
      >
        <Complement
          complementShades={complementShades}
          colorComplement={colorComplement}
          isRgb={isRgb}
        />
      </section>
    </div>
  );
}

export default App;
