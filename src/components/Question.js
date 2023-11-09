import Option from "./Option";
function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
