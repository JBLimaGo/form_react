import "./MyForm.css";

export const MyForm = () => {
  return (
    <div>
      {/* 1 - Criação de Form */}
      <form>
        <div>
          <label htmlFor="name"> Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
