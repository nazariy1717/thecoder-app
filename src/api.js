import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data)
    },
    articles:{
        addArticle: (article) => axios.post('/api/article', article).then(res => res.data),




        getArticles: () => axios.get('/api/getArticles').then(res => res.data),
        getArticle : (article_id) => axios.get(`/api/getArticle/${article_id}`).then(res => res.data),
        clapArticle : (article_id) => axios.post(`/api/clapArticle`, {article_id}).then(res => res.data)
    }
}