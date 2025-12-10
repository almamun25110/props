import { useState } from 'react';
import button from './Button.Module.css';
import btn from './Button.css';
import cssMenu from './App.css'
function App() {
  let [pStatus,setPstatus] = useState(false);
  return (
    <div className="App">
      <div className={cssMenu.menu}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <input type={pStatus? 'text' : 'password'}></input>
      <button onClick={()=>setPstatus(!pStatus)}>{pStatus? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
