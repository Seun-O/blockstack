import React, { useEffect, useGlobal } from "reactn";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [user, setUser] = useGlobal("user");
  const [userSession, setUserSession] = useGlobal("userSession");
  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(data => {
        window.history.replaceState({}, document.title, "/");
        setUser(data);
        props.history.push("/dashboard");
      });
    }
  }, [setUser]);
  return (
    <div>
      {!userSession.isUserSignedIn() ? (
        <button onClick={() => userSession.redirectToSignIn()}>
          Sign in with Blockstack
        </button>
      ) : (
        <button onClick={() => userSession.signUserOut(window.location.origin)}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default withRouter(Login);
