import { Card } from "primereact/card";
import React from "react";

const Message = ({ msg }) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="State Lift">
        <h4>The message is: {msg}</h4>
      </Card>
    </div>
  );
};

export default Message;
