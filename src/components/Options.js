function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== undefined;
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${hasAnswered ? (idx === question.correctOption ? "correct" : "wrong") : ""}`}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
