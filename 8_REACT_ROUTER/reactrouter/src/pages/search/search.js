import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "react-bootstrap";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {error && <p>{error}</p>}
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

export default Search;
