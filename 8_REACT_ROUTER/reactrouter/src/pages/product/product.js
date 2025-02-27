import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "react-bootstrap";

const Product = () => {
  // 4 - rota dinâmica
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
              width: "18rem",
            }}
            className="m-1"
          >
            <Card.Header>{product.name}</Card.Header>
            <Card.Body>
              <Card.Text>R$: {product.price} </Card.Text>
              <Card.Link href={`/products/${product.id}/info`}>
                Mais Informações
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Product;
