import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2> Form </h2>

      {/* Meu component  */}
      <MyForm user={{ name: "João", email: "joaosilva@teste.com" }} />
    </div>
  );
}

export default App;
