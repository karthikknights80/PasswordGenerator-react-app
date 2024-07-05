import logo from './logo.svg';
import './App.css';
import Strength from './components/Strength';
import { useImperativeHandle, useState } from 'react';
import usePasswordGenerator from './hooks/usePasswordGenerator';
function App() {
   const [Length,setLength]=useState(4);
   const [checkboxesData,setCheckboxesData]=useState(
    [
      {title:"Include UpperCase Letters",
        state:false
      },
      {title:"Include LowerCase Letters",
        state:false
      },
      {title:"Include Numbers",
        state:false
      },
      {title:"Include Symbols",
        state:false
      }
    ]
   );
   const [copied,setCopied]=useState(false);
  const handleCheckboxChange=(i)=>{
    const updateData=[...checkboxesData];
    updateData[i].state=!updateData[i].state;
    setCheckboxesData(updateData)
  }
  const {password,errorMessage,generatePassword}=usePasswordGenerator();
  const handleCopy=()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <div className="App">
      
      {/* password text and copy button */}
      {password && <div className='header'>
        <div className='title'>{password}</div>
        <div className='copyBtn' onClick={()=>{handleCopy()}}><button>{copied ? "copied" : "copy"}</button></div>
      </div>}
      {/* char len */}
      <div className='charlength'>
        <span>
        <label>character Length</label>
        <label>{Length}</label>
        
        </span>
        
        <input type='range' min='4' max='20' value={Length} onChange={(e)=>{setLength(e.target.value)}}></input>
      </div>
      
      {/* checkboxes */}
      <div className='checkboxes'>
        {checkboxesData.map((checkbox,i)=>{
          return <div key={i}>
            <input type='checkbox'
            onChange={()=>{handleCheckboxChange(i)}}
            checked={checkbox.state}/>
            <label>{checkbox.title}</label>
            
          </div>
        })}
      </div>
      {/* checking for errors */}
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
      {/* strength */}
      <Strength password={password}/>
      {/* generate button */}
      <button className='generatebtn' onClick={()=>{generatePassword(checkboxesData,Length)}}>Generate button</button>
    </div>
  );
}

export default App;
