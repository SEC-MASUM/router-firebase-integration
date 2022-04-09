import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{margin: "20px"}}>
        <button>Google Sign In</button>
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
