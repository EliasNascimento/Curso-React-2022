import "./App.css";
import { useState, useEffect } from "react";
import { Button, Form, ListGroup, Table } from "react-bootstrap";

// 4 - Custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - get products
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  // 2 - add products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  //8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>R$: {product.price}</td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(product.id)}
                  >
                    Excluir
                  </Button>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      <div className="add-product">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Inserir Produto</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          {/* 7 - state de loading no post */}
          {loading && (
            <Button
              variant="secondary"
              type="submit"
              disabled
              value="Aguarde..."
            />
          )}
          {!loading && (
            <Button variant="primary" type="submit">
              Criar
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}

export default App;
