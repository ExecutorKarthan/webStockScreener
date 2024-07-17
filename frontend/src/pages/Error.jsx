import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Login(props) {
  // State to manange form inputs
  const [formState, setFormState] = useState({ email: '', password: '' });
  // Mutation hook for login operation

  useEffect(() => {
    axios.get('http://localhost:8000/api/login/')
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Function to handle form submission
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // Execute login mutation with form data
  //     const {data} = await login({
  //       variables: { email: formState.email, password: formState.password },
  //     });
  //     // Extract login mutation with form data
  //     const token = data.login.token;
  //     // Store token in local storage
      
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update form state with new input value
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      {/* Link to signup page */}
      <Link to="/signup" className="link">
        ← Go to Signup
      </Link>

      <h2 className="heading">Login</h2>
      {/* Login form */}
      <form >
        <div className="form-group">
          <label htmlFor="email">Email address: </label>
          <input
            className="input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password: </label>
          <input
            className="input"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {/* Error message for login failure */}
        {/* {error ? <p className="error-text">The provided credentials are incorrect</p> : null} */}
        {/* Submit button */}
        <div className="container">
		      <div className="text-center">
          <button type="submit" className="button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
