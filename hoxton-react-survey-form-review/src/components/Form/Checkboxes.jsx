function Checkboxes({ question, name, options }) {
  return (
    <div className="form__group">
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <label>
              <input name={name} type="checkbox" value={option.value} />
              {option.content}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Checkboxes;
