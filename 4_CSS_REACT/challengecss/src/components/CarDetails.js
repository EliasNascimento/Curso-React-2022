import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        {newCar && <p>Esse carro é novo!</p>}
      </ul>
    </div>
  );
};

export default CarDetails;
