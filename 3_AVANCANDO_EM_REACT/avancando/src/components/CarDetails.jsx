import { Card } from "primereact/card";
import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="CarDetails">
        <ul>
          <li>Brand: {brand}</li>
          <li>Km: {km}</li>
          <li>Color: {color}</li>
          {newCar && <h3>this car is new!</h3>}
        </ul>
      </Card>
    </div>
  );
};

export default CarDetails;
