function TextArea ({question, name, required}){
    return(
        <label>
              {question}
              <textarea name={name} cols={30} rows={10} required={required}></textarea>
            </label>
    )
}
export default TextArea