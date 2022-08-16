import logo from "./logo.svg";
import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 1520 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 52840 },
  ];

  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      <header className="App-header">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
