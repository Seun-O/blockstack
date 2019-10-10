import React, { useGlobal } from "reactn";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const [userSession] = useGlobal("userSession");
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;

// {userSession.isUserSignedIn() ? (
//   <>
//     <AddFriend />
//     <FriendsList />
//   </>
// ) : (
//   <h1>hello?</h1>
// )}}
