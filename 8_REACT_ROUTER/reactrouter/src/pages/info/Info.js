import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Info = () => {
  const { id } = useParams();

  // 5 - carregamento dado individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <Card
            bg="light"
            key={product.id}
            text="dark"
            style={{
              width: "40rem",
            }}
            className="m-1"
          >
            <Card.Header>
              Mais informações sobre o produto: {product.name}
            </Card.Header>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>R$: {product.price} </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Info;
