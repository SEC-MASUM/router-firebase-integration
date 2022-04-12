import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is Home</h2>
      <p>Current user is: {user ? user.displayName : "Nobody"}</p>
    </div>
  );
};

export default Home;
