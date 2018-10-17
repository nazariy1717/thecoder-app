import {ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT} from '../../types';

export const adminLoggedIn = () => ({
    type: ADMIN_LOGGED_IN,

});

export const adminLoggedOut = () => ({
    type: ADMIN_LOGGED_OUT
});


export const adminLogin = () => dispatch => dispatch(adminLoggedIn());
