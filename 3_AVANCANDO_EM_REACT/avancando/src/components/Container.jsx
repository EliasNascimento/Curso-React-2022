import { Card } from "primereact/card";
import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="Container">
        <h3>Container title</h3>
        {children}
        <p>The Value is: {myValue}</p>
      </Card>
    </div>
  );
};

export default Container;
