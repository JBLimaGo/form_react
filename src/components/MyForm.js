import "./MyForm.css";
import { useState } from "react";

export const MyForm = ({ user }) => {
  /* 6 - Controlled Inputs - Com esse recurso utilizando a "props" visto em outros capitulos posso trazer para tela do usuáio informações que estejam no 
                             Banco de Dados. */

  /** 3 - Gerenciamento de dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    //console.log("Mudou o nome")
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email, bio, role);

    /* 7 - Limpar Formulário - Limpa os inputs do forms*/
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/** Envio de Form - Atributo onSubmit para pegar o evento de submição do formulário handleSubmit Função que pode ser chamando de qual quer nome para processar o envio   */}
      {/* 1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/** 2 - Lebel envolvendo Input */}
        <label>
          <span>E-mail:</span>
          {/** 4 - simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        
        {/* 8 - TextArea - Um Imput onde tem a possíbilidade de informar varias informações*/}
        <label>
          <span>Bio:</span>
          <textarea
            name="Bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Select - Podendo setar informações de crud de uma tela como Ex. Tipo de perpições do usuário*/}  
        <label>
          <span>Função do sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
