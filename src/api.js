import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('http://185.233.116.113:8080/api/admin-auth',{credentials}).then(res => res.data)
    },
    articles:{

        /* articles api*/
        addArticle: (article) => axios.post('http://185.233.116.113:8080/api/article', article).then(res => res.data),
        getArticles: () => axios.get('http://185.233.116.113:8080/api/articles').then(res => res.data),
        removeArticle: (article_id) => axios.delete(`http://185.233.116.113:8080/api/removeArticle/${article_id}`).then(res => res.data),
        getArticle : (article_id) => axios.get(`http://185.233.116.113:8080/api/article/${article_id}`).then(res => res.data),

        /* images api*/
        addImages : (images) => axios.post(`http://185.233.116.113:8080/api/image`, images).then(res => res.data),
        getImages : () => axios.get(`http://185.233.116.113:8080/api/images`).then(res => res.data),
        removeImage: (image_id) => axios.delete(`http://185.233.116.113:8080/api/removeImage/${image_id}`).then(res => res.data),




        clapArticle : (article_id) => axios.post(`/api/clapArticle`, {article_id}).then(res => res.data)
    }
}