import { useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import axios from 'axios';


function Login(props) {
   // State to manange form inputs
   const [formState, setFormState] = useState({ email: '', password: '' });
  
   // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Execute login mutation with form data
      if(formState.email){
        await (axios.get(`http://localhost:8000/api/login/`))
        .then(response =>{
          console.log(response.data)
        })
        .catch(error => {
        console.log(error);
      }); 
      }      
    } catch (e) {
      console.log(e);
    }
  };

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
      <form onSubmit={handleFormSubmit}>
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
