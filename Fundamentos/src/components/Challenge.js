const Challenge = () => {
  var firsElement = 20;
  var secondElement = 30;
  var sum = 0;

  const handleSoma = () => {
    sum = firsElement + secondElement;
    console.log("Resultado: " + sum);
  };

  return (
    <div>
      <div>
        <h3>1º Elemento: {firsElement}</h3>
      </div>
      <div>
        <h3>2º Elemento: {secondElement}</h3>
      </div>
      <div>
        <button onClick={handleSoma}>Click para Somar</button>
      </div>
      <div>Resultado: {sum}</div>
    </div>
  );
};

export default Challenge;
