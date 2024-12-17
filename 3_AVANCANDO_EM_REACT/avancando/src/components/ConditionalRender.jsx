import { Card } from "primereact/card";
import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  return (
    <div>
      <Card>
        <div>
          <h1>Isso será exibido?</h1>
          {x && <p>se x for true, sim!</p>}
          {!x && <p>agora x é falso!</p>}
        </div>
      </Card>
    </div>
  );
};

export default ConditionalRender;
