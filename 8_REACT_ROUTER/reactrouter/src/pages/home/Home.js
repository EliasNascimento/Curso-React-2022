import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
import { Card } from "react-bootstrap";

const Home = () => {
  // 3 - Carregamento de dados
  const url = "http://localhost:3000/products";

  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1> Produtos </h1>
      {error && <p>{error}</p>}
      {/* <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>

              // 4 - rota dinâmica 
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul> */}
      <div className="products">
        {items &&
          items.map((item) => (
            <Card
              bg="light"
              key={item.id}
              text="dark"
              style={{
                width: "18rem",
              }}
              className="m-1"
            >
              <Card.Header>{item.name}</Card.Header>
              <Card.Body>
                <Card.Text>R$: {item.price} </Card.Text>
                <Card.Link href={`/products/${item.id}`}>Detalhes</Card.Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
