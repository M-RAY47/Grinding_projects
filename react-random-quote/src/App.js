import "./App.css";
import { useState } from "react";
import Main from "./components/Main.jsx";

function App() {
  // colores
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [uniqueColor, setUniqueColor] = useState(getRandomColor());

  const changeTheme = () => setUniqueColor(getRandomColor());
  const appHeaderStyle = {
    backgroundColor: uniqueColor,
    color: uniqueColor,
  };
  return (
    <div className="App">
      <header className="App-header" style={appHeaderStyle}>
        <Main uniqueColor={uniqueColor} changeColor={changeTheme} />
      </header>
    </div>
  );
}

export default App;

