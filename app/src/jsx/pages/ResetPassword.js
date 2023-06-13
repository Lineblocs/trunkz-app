import React from "react";
import { useState } from "react";
import { useDispatch,connect } from "react-redux";
import logo from "../../images/logo-full.png";
import { Link } from "react-router-dom";
import {
  loadingToggleAction,
  ResetPasswordAction,
} from '../../store/actions/AuthActions';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  let errorsObj = { email: '', password: '',confirmPassword: '' };
  const [errors, setErrors] = useState(errorsObj);
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
        errorObj.email = 'Email is Required';
        error = true;
    }
    if (password === '') {
        errorObj.password = 'Password is Required';
        error = true;
    }
    if (confirmPassword === '') {
        errorObj.confirmPassword = 'Confirm Password is Required';
        error = true;
    }
    if(confirmPassword !== password && password && confirmPassword){
        errorObj.confirmPassword = 'Password Not Matched';
        error = true
    }

    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));

    dispatch(ResetPasswordAction(email,password, props.history));
  };


  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        {" "}
        <div className="row justify-content-center h-100 align-items-center">
             <div className="col-md-6">
                <div className="authincation-content">
                  <div className="row no-gutters">
                    <div className="col-xl-12">
                      <div className="auth-form">
                        <div className="text-center mb-3">
                          <Link to="/dashboard">
                            <img src={logo} alt="" />
                            {/* <img src={logo} alt="" /> */}
                          </Link>
                        </div>
                        <h4 className="text-center mb-4 text-white">
                          Reset Password
                        </h4>
                        <form onSubmit={(e) => onSubmit(e)}>
                          <div className="form-group">
                            <label className="text-white">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              placeholder='email'
                              onChange={(e) => setEmail(e.target.value)}
                            />
                               {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                          </div>
                          <div className='form-group'>
                            <label className='mb-1 text-white'>
                                <strong>Password</strong>
                            </label>
                            <input type="password" className="form-control"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder='password'/>
                                   {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                         </div>
                         <div className='form-group'>
                            <label className='mb-1 text-white'>
                                <strong>Confirm Password</strong>
                            </label>
                            <input type="password" className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='password'
                            />
                            {errors.confirmPassword && <div className="text-danger fs-12">{errors.confirmPassword}</div>}
                         </div>
                          <div className="text-center" >
                            <input
                              type="submit"
                              value="SUBMIT"
                              className="btn bg-white text-primary btn-block"

                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
      errorMessage: state.auth.errorMessage,
      successMessage: state.auth.successMessage,
      showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(ResetPassword);