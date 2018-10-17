import {ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT} from '../types';

export default function adminReducer(state={}, action={}) {
    switch (action.type){
        case ADMIN_LOGGED_IN:
            console.log('ADMIN_LOGGED_IN');
            return action.type;
        case ADMIN_LOGGED_OUT:
            console.log('ADMIN_LOGGED_OUT');
            return {};
        default:
            return state;
    }
}