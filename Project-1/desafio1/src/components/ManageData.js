import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  console.log(someData);

  const [number, setNumber] = useState(25);

  return (
    <div>
      <h1>1º valor: {someData}</h1>
      <button onClick={() => (someData = 15)}>Alterar 1º Valor</button>
      <br />
      <h1>2º valor: {number}</h1>
      <button onClick={() => setNumber(50)}>Alterar 2º Valor</button>
    </div>
  );
};

export default ManageData;
