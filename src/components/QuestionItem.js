import React from "react";

function QuestionItem({ question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

//   let updatedQuestionsList = questions.filter(thisQuestion => thisQuestion.id !== id)
// console.log(updatedQuestionsList)

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(() => setQuestions(questions.filter(thisQuestion => thisQuestion.id !== id)));
    // why does filter not work despite it being an array?
    }
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
