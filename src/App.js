import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Lagos" />
        <footer>
          This project was created by Anya Chioma and it is{" "}
          <a
            href="https://github.com/anyachioma/weatherproject-react.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://idyllic-peony-30f9d5.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
