import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data)
    }
}