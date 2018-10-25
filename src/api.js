import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data)
    },
    articles:{
        getArticles: () => axios.get('/api/getArticles').then(res => res.data),
        getArticle : (article_id) => axios.get(`/api/getArticle/${article_id}`).then(res => res.data),
        clapArticle : (article_id) => axios.post(`/api/clapArticle`, {article_id}).then(res => res.data)
    }
}