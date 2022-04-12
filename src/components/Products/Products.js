import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3>Knock Knock !!!! Who is there.....!</h3>
      <p>{user ? user?.displayName : "Voooooooooooot"}</p>
    </div>
  );
};

export default Products;
