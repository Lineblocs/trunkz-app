import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';
import apiClient from '../apiClient';

export function signUp(apiParam) {
    //axios call
    // const postData = apiParam;

    // return apiClient.post(
    //     `/createUser`,
    //     postData,
    // );
    return new Promise((resolve,reject) => {
        resolve({message:"User Created Successfully"})
    })
}

export function forgotPassword(email) {
    //axios call
    // const postData = {
    //     email: email
    // };

    // return apiClient.post(
    //     `/forgotPassword`,
    //     postData,
    // );
    return new Promise((resolve,reject)=>{
        resolve({message:"An email has been sent to your registered email address with password recovery instructions"})
    })
}

export function ResetPassword(email,password) {
    //axios call
    // const postData = {
    //     email: email,
    //     new_password: password
    // };

    // return apiClient.post(
    //     `/resetPassword`,
    //     postData,
    // );
    return new Promise((resolve,reject)=>{
        resolve({message:"ResetPassword Successfully"})
    })
}

export function login(email, password) {
    const postData = {
        email,
        password,
        app_name: "trunkz",
    };

    return apiClient.post(
        `/user/requestLoginToken`,
        postData,
    );
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
           swal("Oops", "Email not found", "error",{ button: "Try Again!",});
           break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    console.log("processing login ", arguments);
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    /*
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    */
    //const timer = expireDate.getTime() - todaysDate.getTime();
    //runLogoutTimer(dispatch, timer, history);

    dispatch(loginConfirmedAction(tokenDetails));
}
