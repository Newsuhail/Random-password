import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/pasChar';

function App() {
  // let p='Wscubetech';
  // let n=p.charAt(Math.floor(Math.random()*p.length))

  let [uppercase,setUpperCase]=useState(false)
  let [lowercase,setLowerCase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)

  let [passwordlen,setPasswordLen]=useState(10)
  let [fpass,setPass]=useState('')

  let createpassword=()=>{
    let finalPass=''
    let charSet=''
    if (uppercase || lowercase || number || symbol){
        if (uppercase) charSet+=UC;
        if (lowercase) charSet+=LC;
        if (number) charSet+=NC;
        if (symbol) charSet+=SC
        for (let i=0; i=passwordlen; i++){
            finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))

        }
        setPass(finalPass)
    }
    else{
      alert('please select atleast checkBox')
    }
    
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <div className="Password_box">
        <h2>Password Generated</h2>
        <div className='passwordboxin'>
          <input type='text' value={fpass}  readOnly/> <button>Copy</button>
        </div>
        <div className='passlength'>
          <label>Password length</label>
          <input type='number' value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} max={20} min={10}/>
        </div>
        <div className='passlength'>
          <label>Including Upper Case</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUpperCase(!uppercase)}/>
        </div>
        <div className='passlength'>
          <label>Including Lower Case</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowerCase(!lowercase)}/>
        </div>
        <div className='passlength'>
          <label>Including Number</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
        </div>
        <div className='passlength'>
          <label>Including Symbol</label>
          <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>
        <button className='btn' onClick={createpassword}>Generate Password</button>
        
    </div>
  );
}

export default App;
