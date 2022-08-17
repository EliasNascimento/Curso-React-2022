import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2> Form </h2>

      {/* Meu component  */}
      <MyForm
        user={{
          name: "Elias",
          email: "elias@teste.com",
          bio: "Desenvolvedor de software",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
