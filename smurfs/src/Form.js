import React, { useState, useContext } from "react";
import { postSmurf } from ".././src/actions";
import { Context } from "./contexts/context";

export const Form = () => {
  const { smurfs, addSmurf } = useContext(Context);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const handleChange = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            name="name"
            id=""
            type="text"
            onChange={handleChange}
            value={newSmurf.name}
          />
        </label>
        {"    "}
        <label>
          Age:
          <input
            name="age"
            id=""
            type="text"
            onChange={handleChange}
            value={newSmurf.age}
          />
        </label>
        {"    "}
        <label>
          height:
          <input
            name="height"
            id=""
            type="text"
            onChange={handleChange}
            value={newSmurf.height}
          />
        </label>
        {"    "}
        <button type="submit" onClick={() => addSmurf(newSmurf)}>
          Add Your Smurf!
        </button>
      </form>
    </div>
  );
};
