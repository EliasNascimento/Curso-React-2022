import React, { useState } from "react";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/changeMessageState";
import UserDetails from "./components/UserDetails";

export default function App() {
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Lamborghini", color: "Yellow", newCar: true, km: 0 },
    { id: 2, brand: "Ferrari", color: "Red", newCar: false, km: 1000 },
    { id: 3, brand: "Mclaren", color: "blue", newCar: false, km: 2000 },
  ];

  function showMessage() {
    console.log("Message from parent component!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const people = [
    { id: 1, name: "Christofer", age: "39", profession: "bar man" },
    { id: 2, name: "Angel", age: "17", profession: "balconist" },
    { id: 3, name: "Maria", age: "55", profession: "teacher" },
  ];

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

      {/* props */}
      <ShowUserName name={userName} />

      {/* destructuring */}
      <CarDetails brand="Ford" km={150000} color="Silver" newCar={false} />

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Mitsubishi" km={300000} color="Black" newCar={false} />
      <CarDetails brand="Peugeot" km={0} color="White" newCar={true} />

      {/* array of objects */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment />

      {/* children */}
      <Container myValue="testing">
        <p> Container content</p>
      </Container>
      <Container myValue="testing 2">
        <p> Container testing</p>
      </Container>

      {/* execute fuction */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Challenge 4 */}
      {people.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}
        />
      ))}
    </div>
  );
}
