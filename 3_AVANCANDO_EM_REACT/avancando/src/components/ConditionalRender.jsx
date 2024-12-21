import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [radioValue, setRadioValue] = useState(true);

  return (
    <div>
      <Card>
        <div>
          <div className="flex flex-wrap gap-3">
            <div className="flex align-items-center">
              <RadioButton
                inputId="1"
                name="yesNo"
                value={true}
                onChange={(e) => setRadioValue(e.value)}
                checked={radioValue === true}
              />
              <label htmlFor="1" className="ml-2">
                Yes
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="2"
                name="yesNo"
                value={false}
                onChange={(e) => setRadioValue(e.value)}
                checked={radioValue === false}
              />
              <label htmlFor="2" className="ml-2">
                No
              </label>
            </div>
          </div>
          {radioValue && <h3>This is showed!</h3>}
        </div>
      </Card>
    </div>
  );
};

export default ConditionalRender;
