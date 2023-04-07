import React from "react";
import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Elias");

  const changeName = () => {
    userName = "João Souza";
    console.log(userName);

    setName("Elias Nascimento");
  };

  return (
    <div>
      {/** 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={changeName}>Mudar nomes!</button>
    </div>
  );
};

export default HookUseState;
