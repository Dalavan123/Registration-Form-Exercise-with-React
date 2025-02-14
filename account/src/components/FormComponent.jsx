import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const saveItem = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form className='form-control' onSubmit={saveItem}>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChange} />
        <br />
        <label>Username</label>
        <input type='text' name='username' onChange={handleChange} />
        <br />
        <label>Email</label>
        <input type='email' name='email' onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type='text' name='password' onChange={handleChange} />
        <br />
        <label>Confirm Password</label>
        <input type='text' name='confirmedPassword' onChange={handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
