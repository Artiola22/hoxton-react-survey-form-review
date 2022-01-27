import Input from "./Input";
import RadioGroup from "./RadioGroup";
import Checkboxes from "./Checkboxes";
import TextArea from "./TextArea";

const formTypes = {
  checkboxes: Checkboxes,
  radiogroup: RadioGroup,
  input: Input,
  textarea: TextArea,
};

function Form({ title, questions, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>{title}</h2>
      {questions.map((formQuestion) => {
        const Component = formTypes[formQuestion.type];
        return <Component key={formQuestion.question} {...formQuestion} />;
      })}
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
export default Form;
