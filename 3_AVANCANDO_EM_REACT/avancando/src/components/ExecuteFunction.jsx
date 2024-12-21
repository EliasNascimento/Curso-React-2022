import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="Execute Function">
        <Button onClick={myFunction}>Click here to execute function!</Button>
      </Card>
    </div>
  );
};

export default ExecuteFunction;
