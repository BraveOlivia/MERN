import React from "react";
import UserItem from "./UserItem";

import "./UserList.css";

const UserList = (props) => {
  console.log(props.users);
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return props.users.map((user) => (
    <ul className="users-list">
      <UserItem
        key={user.id}
        id={user.id}
        name={user.name}
        img={user.image}
        placecount={user.places}
      />
    </ul>
  ));
};

export default UserList;
