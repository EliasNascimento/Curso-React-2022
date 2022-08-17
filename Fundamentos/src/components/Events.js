const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o evento!");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click Aqui!</button>
      </div>
      <br />
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Click aqui também!
        </button>
      </div>
    </div>
  );
};
export default Events;
