import React, { useEffect, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../../features/authSlice';
import team from '../../assets/images/pic.png';
import logoPutih from '../../assets/images/logo_putih.png';
import icon1 from '../../assets/images/undraw_login_re_4vu2 1.png';
import mercurio from '../../assets/images/mercurio.png';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) { 
        navigate('/admin/dashboard');
      }
      dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className='page-container d-flex align-items-end justify-content-center'>
      <div className='side-image-container position-relative'>
        <img src={team} alt="" />
        <img src={mercurio} alt="" className='position-absolute start-0 bottom-0 w-100' />
      </div>
      <div className='h-100 form-container p-5 text-white d-flex flex-column align-items-center justify-content-center'>
        <img src={logoPutih} alt="" className='mb-5' />
        <h1>Silahkan Masuk!</h1>
        <img src={icon1} alt="" className='py-3' />
        <div className='px-5 py-3 text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <form onSubmit={Auth} className='w-100 d-flex flex-column align-items-center justify-content-center gap-2'>
          {isError && <p className="has-text-centered">{message}</p>}
          <input
            type="text"
            name='email'
            placeholder='E-Mail/Username'
            className='input-email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className='w-100 d-flex flex-column align-items-end justify-content-center'>
            <div className="w-100 input-pw d-flex align-items-center justify-content-between">
              <input
                type={showPw ? 'text' : 'password'}
                name='password'
                placeholder='PIN'
                className='w-100 border-none'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setShowPw(!showPw)}
              >
                {!showPw ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </div>
            <a href="/forgot-pin" className='forgot-pin' style={{ userSelect: 'none' }}>Forgot PIN</a>
          </div>
          <br />
          <button type='submit' className='submit-form'>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
