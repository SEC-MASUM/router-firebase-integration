import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Input Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
