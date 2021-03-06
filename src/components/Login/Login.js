import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={() => handleGoogleSignIn()}>Google Sign In</button>
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
