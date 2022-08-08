import React from "react";

const Fragment = ({ propFragment }) => {
  return (
    <>
      <h1>React Fragments</h1>
      <h5>
        <li>
          Os <strong>React fragments</strong> são interessantes quando
          precisamos ter mais de um elemento pai em um componente;
        </li>
        <li>
          Criamos uma tag vazia: <> ... </>
        </li>
        <li>
          e ela serve como elemento pai, não alterando a estrutura do HTML com
          uma div, por exemplo;
        </li>
      </h5>
      <h3>{propFragment}</h3>
    </>
  );
};

export default Fragment;
