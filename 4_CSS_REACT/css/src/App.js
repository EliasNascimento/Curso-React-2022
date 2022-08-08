import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const [value, setValue] = useState(0);

  const changeValue = () => {
    var randomValue = Math.floor(Math.random() * 50) - 10;
    setValue(randomValue);
  };

  const [title, setTitle] = useState(false);

  const changeClass = () => {
    setTitle(!title);
  };

  return (
    <div className="App">
      {/** Css Global */}
      <h1>React com CSS</h1>

      {/** Css do componente */}
      <MyComponent />
      <p>Este parágrado é do App.js</p>

      {/** Css Inline */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/** Css Inline Dinâmico */}
      <h1>Css Inline Dinâmico</h1>
      <button onClick={changeValue}>Mudar valor</button>
      <p>Valor: {value}</p>
      <p
        style={
          value < 0
            ? { color: "red", backgroundColor: "silver" }
            : { color: "blue", backgroundColor: "silver" }
        }
      >
        Se valor for menor que '0', este texto será vermelho, senão, azul.
      </p>

      {/** Classe Dinâmica */}
      <h1>Classe Dinâmica</h1>
      <button onClick={changeClass}>Mudar Classe</button>
      <h2 className={title ? "red-title" : "title"}>
        Este título tem classe dinâmica.
      </h2>
    </div>
  );
}

export default App;
