import UserList from "../components/UserList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Kartik",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Shiva_cropped.jpg",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
}

export default Users;
