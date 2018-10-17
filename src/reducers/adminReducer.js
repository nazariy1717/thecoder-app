import {ADMIN_LOGGED_IN} from '../types';
import {ADMIN_LOGGED_OUT} from '../types';


export default function adminReducer(state={}, action={}) {
    switch (action.type){
        case ADMIN_LOGGED_IN:
            console.log('ADMIN_LOGGED_IN');
            break;
        case ADMIN_LOGGED_OUT:
            console.log('ADMIN_LOGGED_OUT');
            break;
        default:
            return state;
    }
}