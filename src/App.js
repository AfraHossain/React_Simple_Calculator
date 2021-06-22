import React, {useState}from 'react'
import './App.css';
export default function App() {
    const [result, setResult] = useState("");
    const handleClick = (e) =>{ 
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{ 
        setResult("");

    }
    const backspace = () => { 
        setResult(result.slice(0,-1));

    }
    const calculate = () => { 
        try{ 
            setResult(eval(result).toString());
        }catch(err){ 
            setResult("Error")
        }
        
    }
    return (
        <>  <h1 className="heading"> Afra Hossain The NOOB</h1>
           <div>
           <img src=" https://scontent.fdac116-1.fna.fbcdn.net/v/t1.15752-0/p206x206/202337333_521750149239237_3080477191060267527_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_ohc=yjPQBfBoXZwAX-TIpdW&_nc_ht=scontent.fdac116-1.fna&tp=6&oh=37ba82ccb493f6495f670386073471c1&oe=60D592F2"/>
           </div>
          <div className ="container"> 
           
          <form> 
              <input type ="text"value ={result}/> 
              
          </form>
          <div className ="keypad">
          
              <button className="heighlight1"onClick={clear} id = "clear">Clear </button>
              <button className="heighlight1" onClick={backspace} id = "backspace">C </button>
              <button className="heighlight"name="/" onClick={handleClick}>&divide;</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button className="heighlight" name="*" onClick={handleClick}>&times;</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button className="heighlight" name="-" onClick={handleClick}>&ndash;</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button className="heighlight" name="+" onClick={handleClick}>+</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." onClick={handleClick}>.</button>
              <button className="heighlight" onClick={calculate}id = "result">=</button>
              

           </div>
           </div>

          
            
       </>
    )
}
