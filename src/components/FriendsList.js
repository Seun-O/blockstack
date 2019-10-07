import React, { useGlobal } from "reactn";

const FriendsList = () => {
  const [friends] = useGlobal("friends");
  return (
    <div>
      <h1>Hello World</h1>
      {friends.map(friend => (
        <p key={friend.id}>{friend.first_name}</p>
      ))}
    </div>
  );
};

export default FriendsList;
