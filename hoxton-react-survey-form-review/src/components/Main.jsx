import { useState } from "react";
import { formQuestions } from "../../../data";
import AnswersList from "./AnswersList";

import Form from "./Form/Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([
    {
      review: 'Love it',
      email: 'artiola@hotmail.com',
      username: 'Artiola',
      consistency: 3,
      colour: 1,
      logo: 2,
      bestFeatures: ['colour'],
      worstFeatures: ['sound'],
      timeSpent: ['swimming']
    }
  ]);

  function addAnswer(answer) {
    setAnswersList([...answersList, answer]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formEl = event.target;

    const bestFeatures = [...formEl.bestFeatures]
      .filter((input) => input.checked)
      .map((input) => input.value);

    const worstFeatures = [...formEl.worstFeatures]
      .filter((input) => input.checked)
      .map((input) => input.value);

    const timeSpent = [...formEl.timeSpent]
      .filter((input) => input.checked)
      .map((input) => input.value);

    //create answer object in the form
    const answer = {
      review: formEl.review.value,
      email: formEl.email.value,
      username: formEl.username.value,
      consistency: Number(formEl.consistency.value),
      colour: Number(formEl.colour.value),
      logo: Number(formEl.logo.value),
      bestFeatures: bestFeatures,
      worstFeatures: worstFeatures,
      timeSpent: timeSpent,
    };
    //add answer to list
    addAnswer(answer);

    //reset the form
    event.target.reset();
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <Form
          title="Tell us what you think about your rubber duck!"
          questions={formQuestions}
          onSubmit={handleSubmit}
        />

        <Form
          title="Let me greet you"
          questions={[
            {
              question: "whats your name?",
              type: "input",
              kind: "text",
              name: "name",
            },
          ]}
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Your name is ${e.target.name.value}!`);
          }}
        />

        <Form
          title="Sign in"
          questions={[
            {
              question: "What is your email?",
              type: "input",
              kind: "email",
              name: "email",
            },
            {
              question: "What is your password?",
              type: "input",
              kind: "password",
              name: "password",
            },
          ]}
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Created account with 
           Username: ${e.target.email.value}
           Password: ${e.target.password.value}
           `);
          }}
        />
      </section>
    </main>
  );
}

export default Main;
