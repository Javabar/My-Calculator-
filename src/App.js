import './App.css';
import Operators from './Components/Operators';
import Numbers from './Components/Numbers';
import { evaluate } from 'mathjs';
import {useState} from 'react';

const App = () => {
  const [input, setInput]= useState("");

  // Function to calculate a result on a specific button click and update the state

  const calculate = (button) => {
    if(button === '='){
      const result = evaluate(input);
      setInput(result);
    } else if (button === 'c'){
      setInput("")
    } else 
    setInput(input + button);
  };

  // function for when user clicks on buttons
const handleClick = (e) => {
  const display = e.target.textContent;
  calculate(display);
}

return (
<div className="App">
<div>
<h1>My Calculator </h1>
<h2 data-testid="display">{input}</h2>
{/* need to pass handle click as a prop down to operator and numbers */}
<Operators handleClick={handleClick}/>
<Numbers handleClick={handleClick}/>
</div>
</div>
);
};
export default App;