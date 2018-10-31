import { ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT } from '../types';
import api from '../api';

// export const adminLogin = credentials => dispatch =>
//     api.admin.login(credentials).then( admin => {
//         localStorage.adminJWT = admin.token;
//         console.log(admin);
//
//         dispatch({type: ADMIN_LOGGED_IN, admin})
//     });

export function adminLogin(credentials) {
    return (dispatch) =>{
        api.admin.login(credentials).then( admin => {
            localStorage.adminJWT = admin.token;
            console.log(admin);
            dispatch({type: ADMIN_LOGGED_IN, admin})
        });
    }
}

export function logout(){
    return (dispatch) =>{
        localStorage.removeItem('adminJWT');
        dispatch({ type: ADMIN_LOGGED_OUT});
    }
}

