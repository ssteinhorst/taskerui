import React from 'react';
import { useNavigate } from 'react-router-dom';



function LoginPage() {

  const navigate = useNavigate();

  console.log('in LoginPage');
  const handleLogin = () => {
    // Perform login logic here, e.g., making an API request to authenticate

    // Redirect to the task list page after successful login

    navigate('/tasks');
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Add login form or components here */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
