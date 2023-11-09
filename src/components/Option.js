function Option({ question, answer, dispatch }) {
  const isAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""}
          ${
            isAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={isAnswered}
          onClick={() => dispatch({ type: "answered", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
