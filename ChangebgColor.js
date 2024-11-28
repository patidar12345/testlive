
import { useRef, useState } from "react"

function ChangebgColor()
{
    const red = useRef()
    const green = useRef()
    const blue = useRef()
    const [c,setC] = useState()
    function changeColor()
    {
        if(red.current.checked)
             setC(red.current.value)
        else if(green.current.checked)
            setC(green.current.value)
        else
            setC(blue.current.value)

    }
    return(<div style={{'backgroundColor':c,width:"1500px",height:"800px"}}>
        <input type="radio" name="color" ref={red} value="Red" onClick={changeColor} />RED
        <br/>
        <input type="radio"  name="color" ref={green} value="Green" onClick={changeColor} />Green
        <br />
        <input type="radio"  name="color" ref={blue} value="blue" onClick={changeColor} />Blue
        </div>)
}
export default ChangebgColor;



