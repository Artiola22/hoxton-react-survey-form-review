function RadioGroup({ question, name, options }) {
  return (
    <div className="form__group radio">
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <input
              id={name + option.value}
              type="radio"
              name={name}
              value={option.value}
            />
            <label htmlFor={name + option.value}>{option.content}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RadioGroup;
