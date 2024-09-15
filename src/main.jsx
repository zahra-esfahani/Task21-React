
const Input = ({ handleChange, hint, submitHandler, hintOpacity}) => {
  return (
    <form className="input" onSubmit={submitHandler}>
      <label htmlFor="input" className={hintOpacity===1  ? "label" : null}>
        {hint}
      </label>
      <input type="text" id="input" onChange={handleChange} />
      <button type="submit"></button>
    </form>
  );
};

export default Input;
