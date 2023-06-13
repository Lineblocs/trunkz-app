import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import logo from '../../images/logo-full.png'
import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';
function Register(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorsObj = { email: '', password: '',firstName: '',lastName: '',phone:'' };
    const [errors, setErrors] = useState(errorsObj);
    const [showOtp, setShowOtp] = useState(true)
    const dispatch = useDispatch();

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };

        if (phone === '') {
            errorObj.phone = 'Phone Number is Required';
            error = true;
        }

        if (firstName === '') {
            errorObj.firstName = 'First Name is Required';
            error = true;
        }

        if (lastName === '') {
            errorObj.lastName = 'Last Name is Required';
            error = true;
        }

        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }

        setErrors(errorObj);

        if (error) return;

        const apiParam = {
            first_name: firstName,
            last_name: lastName,
            password: password,
            email: email,
            phone_number: phone
        }
        dispatch(loadingToggleAction(true));

        dispatch(signupAction(apiParam, props.history));
    }
  return (
    <div className='authincation h-100 p-meddle'>
        <div className='container h-100'>
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='col-md-6'>
                    <div className='authincation-content'>
                        <div className='row no-gutters'>
                            <div className='col-xl-12'>
                                <div className='auth-form'>
                                    <div className='text-center mb-3'>
                                        <img src={logo} alt="" />
                                    </div>
                                    {  showOtp ? <> 
                                    <h4 className='text-center mb-4 text-white'>Sign up your account</h4>
                                    {props.errorMessage && (
                                        <div className='bg-red-300 text-danger border border-red-900 p-1 my-2'>
                                            {props.errorMessage}
                                        </div>
                                    )}
                                    {props.successMessage && (
                                        <div className='bg-green-300 text-danger text-green-900  p-1 my-2'>
                                            {props.successMessage}
                                        </div>
                                    )}
                                    <form onSubmit={onSignUp}>
                                        <div className='form-group'>
                                            <label className='mb-1 text-white'>
                                              <strong>First Name</strong>
                                            </label>
                                            <input type='text' className='form-control' placeholder='First Name'  
                                                 value={firstName}   
                                                 onChange={(e) => setFirstName(e.target.value)} 
                                            />
                                             {errors.firstName && <div className="text-danger fs-12">{errors.firstName}</div>}
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1 text-white'>
                                              <strong>Last Name</strong>
                                            </label>
                                            <input type='text' className='form-control' placeholder='Last Name'  
                                                 value={lastName}   
                                                 onChange={(e) => setLastName(e.target.value)} 
                                            />
                                             {errors.lastName && <div className="text-danger fs-12">{errors.lastName}</div>}
                                        </div>
                                       
                                        <div className='form-group'>
                                            <label className='mb-1 text-white'>
                                              <strong>Phone Number</strong>
                                            </label>
                                            <input type='tel' className='form-control' placeholder='Phone Number'
                                                value={phone}   
                                                onChange={(e) => setPhone(e.target.value)} 
                                            />
                                            {errors.phone && <div className="text-danger fs-12">{errors.phone}</div>}
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1 text-white'>
                                              <strong>Email</strong>
                                            </label>
                                            <input type="email" className="form-control"
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
												placeholder='password'
                                            />
                                        </div>
                                        {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                        <div className='text-center mt-4'>
                                            <input type='submit' className='btn bg-white text-primary btn-block'/>
                                        </div>
                                    </form>
                                    <div className='new-account mt-3 text-white'>
                                        <p>
                                            Already have an account?{' '}
                                            <Link className='text-white' to='/login'>
                                                Sign in
                                            </Link>
                                        </p>
                                    </div>
                                    </> : <>
                                        <h2 className='text-center mb-3 text-white'>OTP Verification</h2>
                                        <h6 className='text-center mb-4 text-white'>We've Sent a OTP Verification Code to Your Email</h6>
                                        <form>
                                            <div className='form-group'>
                                                <input type='text' className="form-control"
                                                    placeholder='Enter Verification Code'
                                                />
                                            </div>
                                            <div className='text-center mt-4'>
                                                <input type='submit' className='btn bg-white text-primary btn-block'/>
                                            </div>
                                        </form>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);
