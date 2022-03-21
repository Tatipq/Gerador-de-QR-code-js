import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';
import imgQrcode from './assets/logo.png';

function App() {

  const [text, setText] = useState("")
  return (  
    <div className="App"  id="App">
      <a href="App.js" ><img src={imgQrcode}width="150" height="150"></img></a>
      <input onChange={(element)=>{setText(element.target.value)}} value={text}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
      
    
  );
}

export default App;
