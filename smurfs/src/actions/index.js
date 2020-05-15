import axios from "axios";
export const GET_SMURFS = "ADD_SMURFS";
export const POST_SMURF = "POST_SMURF";

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: GET_SMURFS });
    // then make the async call
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_SMURFS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const postSmurf = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: POST_SMURF, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
    });
};
