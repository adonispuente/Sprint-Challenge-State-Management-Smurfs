import { GET_SMURFS } from "../actions";
import { POST_SMURF } from "../actions";

const initialState = {
  smurfs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case POST_SMURF:
      const newSmurf = {
        name: action.payload.name,
        height: action.payload.height,
        age: action.payload.age,
        id: Date.now(),
      };
      return { ...state, smurfs: [...state.smurfs, newSmurf] };

    default:
      return state;
  }
};
