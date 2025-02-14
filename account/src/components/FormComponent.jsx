import { useState } from 'react';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const inputName = event => {
    setName(event.target.value);
  };

  const inputUsername = event => {
    setUsername(event.target.value);
  };

  const inputEmail = event => {
    setEmail(event.target.value);
  };

  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const inputConfirmedpassword = event => {
    setConfirmedPassword(event.target.value);
  };

  const saveItem = event => {
    event.preventDefault();
    const inputData = {
      name: name,
      username: username,
      email: email,
      password: password,
      confirmedpassword: confirmedPassword,
    };

    console.log(inputData);
  };

  return (
    <div>
      <form className='form-control' onSubmit={saveItem}>
        <label>Name</label>
        <input type='text' onChange={inputName} />
        <br />
        <label>Username</label>
        <input type='text' onChange={inputUsername} />
        <br />
        <label>Email</label>
        <input type='email' onChange={inputEmail} />
        <br />
        <label>Password</label>
        <input type='text' onChange={inputPassword} />
        <br />
        <label>Confirm Password</label>
        <input type='text' onChange={inputConfirmedpassword} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
