import React, { useContext } from "react";
import { Context } from "./contexts/context";

export const ActualSmurf = () => {
  const { smurfs, addSmurf } = useContext(Context);
  //   console.log(smurfs, "from Smurf List");

  return (
    <>
      {smurfs.map((smurf) => (
        <div key={smurf.id}>
          <h3>Name: {smurf.name}</h3>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </>
  );
};
