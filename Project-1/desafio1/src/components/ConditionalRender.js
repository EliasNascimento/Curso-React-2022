import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1> Isso será exibido? </h1>
      {x && <p>se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}

      <h1> If ternário</h1>
      {name === "João" ? (
        <div>
          <p> O nome é João!</p>
        </div>
      ) : (
        <div>
          <p> Nome não encontrado! </p>
        </div>
      )}
      <button onClick={() => setName("João")}>Click para Mudar o nome</button>
    </div>
  );
};

export default ConditionalRender;
