import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["hi", "hello", "hello, how are you doing?"];

  return (
    <div className="card flex justify-content-center">
      <Card title="Change Message State">
        <Button onClick={() => handleMessage(messages[0])}>1</Button>
        <Button onClick={() => handleMessage(messages[1])}>2</Button>
        <Button onClick={() => handleMessage(messages[2])}>3</Button>
      </Card>
    </div>
  );
};

export default ChangeMessageState;
