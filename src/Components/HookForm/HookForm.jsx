import useInputField from "../../hooks/useInputField";

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={nameOnChange} defaultValue={name} />
      </form>
    </div>
  );
};

export default HookForm;
