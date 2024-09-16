import "./App.css";
import { MyForm } from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1> Forms</h1>
      <MyForm user={{ name: "Jefferson", email: "Jefferson@teste.react" }} />
    </div>
  );
}

export default App;
