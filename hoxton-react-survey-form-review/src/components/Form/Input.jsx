function Input({ question, kind, name, required }) {
  return (
    <label>
      {question}
      <input type={kind} name={name} required={required} />
    </label>
  );
}
export default Input;
