import { useState } from "react";
import React from "react";
import Test from "./Test";
import "./App.css";
import "./index.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Test></Test>
      <header className="App-header">
        <img className="App-logo" alt="" src={logo} />
        <p>Hesllo hllsite +sss1s1sssss </p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            cosunt iss:s {count}
          </button>
        </p>
        <p>
          Edit <code>Appsssl</code> and sssave ells tesst.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
