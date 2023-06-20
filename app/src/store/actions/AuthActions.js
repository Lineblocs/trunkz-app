import {
    formatError,
    login,
    saveTokenInLocalStorage,
    signUp,
    forgotPassword,
    ResetPassword
} from '../../services/AuthService';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const FORGOT_PASSWORD_ACTION = '[forgot action] forgot password action'
export const RESET_PASSWORD_ACTION = '[reset action] reset password action'

export function signupAction(apiParam, history) {
    return (dispatch) => {
        signUp(apiParam)
        .then((response) => {
            // saveTokenInLocalStorage(response.data);
            // runLogoutTimer(
            //     dispatch,
            //     response.data.expiresIn * 1000,
            //     history,
            // );
            dispatch(confirmedSignupAction(response.message));
            history.push("/thankyou");
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(signupFailedAction(errorMessage));
        });
    };
}
export function ResetPasswordAction(email,password, history) {
    return (dispatch) => {
        ResetPassword(email,password)
        .then((response) => {
            dispatch(confirmedResetPasswordAction(response.message));
            // history.push("/login");
        })
    };
}

export function ForgotPasswordAction(email){
    return (dispatch) => {
        forgotPassword(email)
        .then((response) =>{
            console.log(" => 'response action': ", response.message);
            dispatch(confirmedPasswordAction(response.message));
        })
    }
}   

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, history) {
    return (dispatch) => {
        login(email, password)
            .then((response) => {
                console.log("login response ", response);
                var responseData = response.data;
                var token = responseData.token;
                saveTokenInLocalStorage(responseData);
                //var authToken = token.auth;
                // var expireIn = token.expire_in_timestamp;
                // var user = response.data.user;
                /*
                runLogoutTimer(
                    dispatch,
                    expireIn * 1000, // convert to milliseconds
                    history,
                );
                */
                dispatch(loginConfirmedAction({ token: token, userDetails: responseData }));
				history.push('/dashboard');
				window.location.reload();
                
				//history.pushState('/index');
                
            })
            .catch((error) => {
                //const errorMessage = formatError(message);
                var errorMessage = "invalid credentials";
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(user) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: user,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}
export function confirmedResetPasswordAction(payload) {
    return {
        type: RESET_PASSWORD_ACTION,
        payload,
    };
}

export function confirmedPasswordAction(payload) {
    return {
        type: FORGOT_PASSWORD_ACTION,
        payload
    }
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
