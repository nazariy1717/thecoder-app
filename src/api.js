import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data)
    },
    articles:{

        /* articles api*/
        addArticle: (article) => axios.post('/api/article', article).then(res => res.data),
        getArticles: () => axios.get('/api/articles').then(res => res.data),
        removeArticle: (article_id) => axios.delete(`/api/removeArticle/${article_id}`).then(res => res.data),
        getArticle : (article_id) => axios.get(`/api/article/${article_id}`).then(res => res.data),

        /* images api*/
        addImages : (images) => axios.post(`/api/addImages`, images).then(res => res.data),
        getImages : () => axios.get(`/api/images`).then(res => res.data),




        clapArticle : (article_id) => axios.post(`/api/clapArticle`, {article_id}).then(res => res.data)
    }
}