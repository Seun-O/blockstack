import React, { useGlobal } from "reactn";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

const App = () => {
  const [userSession] = useGlobal("userSession");
  return (
    <div>
      <Route path="/" component={Login} />
      {userSession.isUserSignedIn() ? (
        <>
          <AddFriend />
          <FriendsList />
        </>
      ) : (
        <h1>hello?</h1>
      )}
    </div>
  );
};

export default App;
