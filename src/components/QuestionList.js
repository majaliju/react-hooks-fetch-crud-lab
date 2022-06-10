import { data } from "msw/lib/types/context";
import React, {useEffect} from "react";

function QuestionList() {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => console.log(data))
  }, [])
  
  function handleQuestionsDisplay(q){
    data.map((question) => <QuestionItem />)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* Q.map((question) => <QuestionItem />) */}
      </ul>
    </section>
  );
}

export default QuestionList;
