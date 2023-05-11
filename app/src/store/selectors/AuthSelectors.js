export const isAuthenticated = (state) => {
    console.log('isAuthenticated ', state);
    if (state.auth.auth && state.auth.auth.token && state.auth.auth.token.auth) return true;
    return false;
};
