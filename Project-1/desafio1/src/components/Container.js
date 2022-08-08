const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <h3>e este é o valor: {myValue}</h3>
    </div>
  );
};

export default Container;
