import React, { Component, useState, useEffect } from "react";
import "./App.css";
// import { Smurfs } from "../smurfs";
import axios from "axios";
import { getSmurfs } from "../actions";
import { Context } from "../contexts/context";
import { ActualSmurf } from "../ActualSmurf";
import { Form } from "../Form";

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        setSmurfs([...smurfs, smurf]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Context.Provider value={{ smurfs, addSmurf }}>
        <ActualSmurf />
        <Form />
      </Context.Provider>
    </div>
  );
}

export default App;
