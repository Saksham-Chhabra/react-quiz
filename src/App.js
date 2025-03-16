import { useEffect, useReducer } from "react";

import "./App.css";
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./main";

const initialState = {
  questions: [],

  // 'loading' 'error', 'ready', 'active' 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "setQuestions", payload: data }))
      .catch(dispatch({ type: "dataFailed" }));
  }, []); // Empty array means this effect will only run once after the first render.

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
