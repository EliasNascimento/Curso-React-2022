import "./App.css";

import homer from "./assets/homer simpsons.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import { useState } from "react";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const name = "Elias";
  const [userName] = useState("João");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 1520 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 52840 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge 3</h1>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/*props*/}
        <ShowUserName name={name} />
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="Citroen" km={50000} color="preto" newCar={false} />
        {/* reaproveitamento */}
        <CarDetails brand="Ford" km={100000} color="prata" newCar={true} />
        <CarDetails brand="Fiat" km={5000} color="branco" newCar={false} />
        {/** loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        {/** React Fragments */}
        <Fragment propFragment="teste" />

        {/** Container */}
        <Container myValue="Algum Valor">
          <h3>e este é o conteúdo</h3>
        </Container>

        {/** Executar função */}
        <ExecuteFunction myFunction={showMessage} />

        {/** State lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />

        {/** imagens */}
        <h1> Imagens</h1>
        {/*Imagem em public */}
        <div>
          <img src="/homer simpsons.jpg" alt="Homer" />
        </div>
        {/*Imagem em assets */}
        <div>
          <img src={homer} alt="" />
        </div>
      </header>
    </div>
  );
}

export default App;
