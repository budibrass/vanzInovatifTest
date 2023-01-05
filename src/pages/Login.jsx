import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login/main.css';
import './css/login/util.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: ''});
  const [validate, setValidate] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if(login.username === "username" && login.password === "password") {
      localStorage.setItem("token", "initoken12345678");
      navigate("/");
    } else {
      setValidate(true);
    }
  };

  const handleOnchange = (e) => {
    if(e.target.name === 'username') {
      setLogin({
        ...login,
        username: e.target.value
      })
    }
    if(e.target.name === 'password') {
      setLogin({
        ...login,
        password: e.target.value
      })
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form onSubmit={handleLogin} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">
              Log In
            </span>

            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
              <input 
                className="input100" 
                type="text" 
                name="username" 
                placeholder="Username" 
                onChange={handleOnchange}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate = "Please enter password">
              <input 
                className="input100" 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleOnchange}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="text-right p-t-13 p-b-23">
            </div>
            {validate
            ?
            <div id="validationServerUsernameFeedback" className="mb-3 text-danger d-flex justify-content-center">
              Your username or password wrong !!!
            </div>
            : null}

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Login
              </button>
            </div>

            <div className="flex-col-c p-t-100 p-b-40">
              <span className="txt1 p-b-9">
                Don’t have an account?
              </span>

              <a href="#" className="txt3">
                Sign up now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login