import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ManageData = () => {
  const [number, setNumber] = useState(10);

  return (
    <div>
      <Card>
        <p>Value: {number}</p>
        <div>
          <Button icon="pi pi-plus" onClick={() => setNumber(number + 10)}>
            Add 10
          </Button>
          <Button icon="pi pi-Sub" onClick={() => setNumber(number - 10)}>
            Sub 10
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ManageData;
