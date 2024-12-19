import React from "react";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

export default function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="City" width={600} height={300} />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Paisagem" width={600} height={300} />
      </div>

      {/* useState */}
      <ManageData />

      {/* Renderização de lista */}
      <ListRender />

      <ConditionalRender />

      <ShowUserName />
    </div>
  );
}
