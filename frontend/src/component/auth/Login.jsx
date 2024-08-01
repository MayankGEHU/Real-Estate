import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../auth/login.css';
import { AuthContext } from '../context/AuthContext';

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signupInfo, setSignupInfo] = useState({ name: '', email: '', password: '' });
  const [signinInfo, setSigninInfo] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSignUpMode) {
      setSignupInfo({ ...signupInfo, [name]: value });
    } else {
      setSigninInfo({ ...signinInfo, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return toast.error('Name, email, and password are required');
    }
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        login(result.token); 
        setTimeout(() => {
          navigate('/interface');  
        }, 1000);
      } else {
        toast.error(result.message || 'Signup failed');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = signinInfo;
    if (!email || !password) {
      return toast.error('Email and password are required');
    }
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signinInfo)
      });
      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        login(result.token); 
        setTimeout(() => {
          navigate('/interface');  
        }, 1000);
      } else {
        toast.error(result.message || 'Signin failed');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container-auth ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container-auth">
        <div className="signin-signup">
          <form onSubmit={handleSignin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={signinInfo.email}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={signinInfo.password}
              />
            </div>
            <input type="submit" value="Login" className="btn-auth solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form onSubmit={handleSignup} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Username"
                value={signupInfo.name}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={signupInfo.email}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={signupInfo.password}
              />
            </div>
            <input type="submit" className="btn-auth" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;
