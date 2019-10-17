import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const initialState = {
    credentials: {
      username: '',
      password: ''
    }
  }

  const [loginData, setLoginData] = useState(initialState);

  const handleChange = e => {
    setLoginData({
      credentials: {
        ...loginData.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', loginData.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/colors')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="login-div">
      <h1>Welcome to the Bubble App!</h1>
      <p>Please Login</p>
      <form onSubmit={login}>
        <input 
          type="text"
          name="username"
          value={loginData.credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input 
          type="password"
          name="password"
          value={loginData.credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
