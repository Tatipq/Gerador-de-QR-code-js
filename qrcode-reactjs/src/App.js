import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';
let imgQrcode = './assets/logo.png';

function App() {

  const [text, setText] = useState("")
  return (  
    <div className="App"  id="App">
      <a href="App.js" ><img src={imgQrcode}width="100" height="40"></img></a>
      <input onChange={(element)=>{setText(element.target.value)}} value={text}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
      
    
  );
}

export default App;
