import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card-list">
      {users.map((el) => (
        <Card className="card-info" border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{el.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {el.username}
            </Card.Subtitle>
            <Card.Text>
              Adresse : {el.address.street} / {el.address.city}
            </Card.Text>
            <Card.Link href="#">{el.email}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Users;
