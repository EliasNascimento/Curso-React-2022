import { Card } from "primereact/card";
import React from "react";

const ShowUserName = (props) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="UserName">
        <p className="m-0">User name is: {props.name}</p>
      </Card>
    </div>
  );
};

export default ShowUserName;
