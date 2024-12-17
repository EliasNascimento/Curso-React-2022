import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import React, { useState } from "react";

const ListRender = () => {
  const [selectedName, setSelectedName] = useState();
  const [list, setList] = useState([
    { id: 1, name: "Pedro", age: 30 },
    { id: 2, name: "Maria", age: 35 },
    { id: 3, name: "João", age: 27 },
    { id: 4, name: "Elias", age: 38 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setList((prevLists) => {
      console.log(prevLists);
      return prevLists.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <Card>
        <p>List:</p>
        <ListBox
          options={list}
          value={selectedName}
          onChange={(e) => setSelectedName(e.value)}
          optionLabel="name"
          className="w-full md:w-14rem"
        ></ListBox>
        <p>
          <Button onClick={deleteRandom}>Delete random User</Button>
        </p>
      </Card>
    </div>
  );
};

export default ListRender;
