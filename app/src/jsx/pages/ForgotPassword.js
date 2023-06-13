import React from "react";
import { useState } from "react";
import { useDispatch,connect } from "react-redux";
import logo from "../../images/logo-full.png";
import { Link } from "react-router-dom";
import {
  loadingToggleAction,
  signupAction,
} from '../../store/actions/AuthActions';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const dispatch = useDispatch()

  
  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '') setEmailError(true);
    if (emailError) return;
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(email));
  };


  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        {" "}
        <div className="row justify-content-center h-100 align-items-center">
          {
            !props.successMessage  ? <div className="col-md-6">
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
                          Forgot Password
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
                              {emailError && <div className="text-danger fs-12">Email is Required</div>}
                          </div>
                          <div className="text-center">
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
              : 
              <div>
                  <h6 style={{fontSize:"25px"}} className="text-primary">An email has been sent to your registered email address with password recovery instructions</h6>
              </div>
          }
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
export default connect(mapStateToProps)(ForgotPassword);