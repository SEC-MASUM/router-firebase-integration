import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h3>Knock Knock !!!! Who is there.....!</h3>
      <p>{user ? user?.displayName : "Voooooooooooot"}</p>
    </div>
  );
};

export default Products;
