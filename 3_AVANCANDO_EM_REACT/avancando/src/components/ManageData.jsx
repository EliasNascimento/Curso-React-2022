import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ManageData = () => {
  const [number, setNumber] = useState(10);

  return (
    <div className="card flex justify-content-center">
      <Card>
        <p className="m-0">Value: {number}</p>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-wrap justify-content-end gap-2">
            <Button
              icon="pi pi-plus"
              label="Add"
              onClick={() => setNumber(number + 10)}
            />
            <Button
              icon="pi pi-minus"
              label="Sub"
              onClick={() => setNumber(number - 10)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ManageData;
