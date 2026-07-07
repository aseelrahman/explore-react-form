import useInputField from "../../hooks/useInputField";

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange] =useInputField('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={nameOnChange} defaultValue={name} placeholder="Name" />
        <br />
        <input type="email" onChange={emailOnChange} placeholder="Email" defaultValue={email} />
        <br />
        <input type="password" name="" onChange={passwordOnChange} placeholder="Password"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
