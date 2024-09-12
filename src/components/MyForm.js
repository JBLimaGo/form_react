import "./MyForm.css";
import { useState } from "react";

export const MyForm = () => {
  {
    /** 3 - Gerenciamento de dados */
  }
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    //console.log("Mudou o nome")
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 1 - Criação de Form */}
      <form>
        <div>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </div>
        {/** 2 - Lebel envolvendo Input */}
        <label>
          <span>E-mail:</span>
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
