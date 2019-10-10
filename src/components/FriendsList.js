import React, { useGlobal } from "reactn";

const FriendsList = () => {
  const [friends] = useGlobal("friends");
  return (
    <div>
      <h1>Hello World</h1>
      {friends.map(f => (
        <React.Fragment key={f.id}>
          <p>
            {f.last_name}, {f.first_name}
          </p>
          <p>DOB: {f.DOB}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FriendsList;
