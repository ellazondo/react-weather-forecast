
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div ClassName="Container">
        <Weather />

        <footer className="foot">
          Coded by Gabriella Elizondo and is{" "}
          <a 
          href="https://github.com/ellazondo/react-weather-app-latestmac"
          target="_blank"
          rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
