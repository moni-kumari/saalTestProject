import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

function useQuery(URL) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        dispatch({ type: "DATA", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err });
      });
  }, [URL]);
  return state;
}

export default useQuery;
