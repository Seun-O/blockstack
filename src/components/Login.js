import React, { useEffect, useGlobal } from "reactn";

const Login = () => {
  const [user, setUser] = useGlobal("user");
  const [userSession, setUserSession] = useGlobal("userSession");
  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(data => {
        window.history.replaceState({}, document.title, "/");
        setUser(data);
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

export default Login;
