import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Elias", "Silmara", "Valdo", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Elias", age: 36 },
    { id: 2, name: "Silmara", age: 28 },
    { id: 3, name: "Valdo", age: 71 },
    { id: 4, name: "Maria", age: 66 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
