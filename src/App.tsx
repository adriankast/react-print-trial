import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './App.css';
import logo from './logo.svg';
import Printable from './Printable';


function App() {
  const clickPrint = () => {
    const w = window.open();
    const domString = ReactDOMServer.renderToStaticMarkup(<Printable/>);
    w?.document.write("<html><body><div>My Print Content</div>" + domString + "</body></html>");
    w?.print();
    w?.close();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Press button to print something
        </p>
        <button type="button" onClick={() => {clickPrint()}}>
        Printme
        </button>
      </header>
    </div>
  );
}

export default App;
