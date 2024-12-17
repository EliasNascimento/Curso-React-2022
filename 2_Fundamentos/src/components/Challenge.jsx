import { useState } from "react";

const Challenge = () => {
  const firstElement = 20;
  const secondElement = 30;
  const [sum, setSum] = useState(0);

  const handleSoma = () => {
    const result = firstElement + secondElement;
    setSum(result);
    console.log("Resultado: " + result);
  };

  return (
    <div>
      <div>
        <h3>1º Elemento: {firstElement}</h3>
      </div>
      <div>
        <h3>2º Elemento: {secondElement}</h3>
      </div>
      <div>
        <button onClick={handleSoma}>Clique para Somar</button>
      </div>
      <div>Resultado: {sum}</div>
    </div>
  );
};

export default Challenge;
