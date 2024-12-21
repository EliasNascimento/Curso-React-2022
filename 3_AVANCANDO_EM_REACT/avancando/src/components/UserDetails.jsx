import { Card } from "primereact/card";
import React from "react";

const UserDetails = ({ name, age, profession }) => {
  return (
    <div className="card flex justify-content-center">
      <Card title="UserDetails">
        <ul>
          <li>Name={name}</li>
          <li>Age={age}</li>
          <li>Profession={profession}</li>
          {age >= 18 ? (
            <p> Can get driver's license! </p>
          ) : (
            <p>can't get driver's license!</p>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default UserDetails;
