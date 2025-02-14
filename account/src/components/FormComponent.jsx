import { useState } from 'react';
import Inputfield from './Inputfield';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

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

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      <FormHeader />
      <Inputfield
        label='Name'
        name='name'
        type='text'
        value={formData.name}
        onChange={handleChange}
      />
      <Inputfield
        label='Username'
        name='username'
        type='text'
        value={formData.username}
        onChange={handleChange}
      />
      <Inputfield
        label='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
      />
      <Inputfield
        label='Password'
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
      />
      <Inputfield
        label='Confirm Password'
        name='confirmedPassword'
        type='password'
        value={formData.confirmedPassword}
        onChange={handleChange}
      />
      <FormFooter />
    </form>
  );
};

export default FormComponent;
