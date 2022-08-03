import "./App.css";

import homer from "./assets/homer simpsons.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Elias";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge 3</h1>

        <ManageData />
        <ListRender />
        <ConditionalRender />

        {/*props*/}
        <ShowUserName name={name} />

        {/* destructuring */}
        <CarDetails brand="Citroen" km={50000} color="preto" newCar={false} />
        {/* reaproveitamento */}
        <CarDetails brand="Ford" km={100000} color="prata" newCar={true} />
        <CarDetails brand="Fiat" km={5000} color="branco" newCar={false} />

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
