import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  // moved the question state from QuestionList
  const [questions, setQuestions] = useState([])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
      page={page} 
      setPage={setPage} 
      questions={questions}
      setQuestions={setQuestions}/> : <QuestionList
      questions={questions}
      setQuestions={setQuestions}
      />}
    </main>
  );
}

export default App;
