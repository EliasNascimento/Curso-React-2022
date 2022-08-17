import { useState } from "react";

import "./MyForm.css";

const MyForm = () => {
  {
    /* 3 - Alteração de valores */
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <h5>Form padrão</h5>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </div>

        {/* 2 - Label envolvendo o input */}
        <label>
          <h5>Form com label envolvendo o input</h5>
          <span>E-mail:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
