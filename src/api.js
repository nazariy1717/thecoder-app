import axios from 'axios';

export default{
    admin:{
        login: (credentials) => axios.post('http://localhost:8080/api/admin-auth',{credentials}).then(res => res.data)
    },
    articles:{

        /* articles api*/
        addArticle: (article) => axios.post('https://testingsite.pp.ua/api/article', article).then(res => res.data),
        getArticles: () => axios.get('https://testingsite.pp.ua/api/articles').then(res => res.data),
        removeArticle: (article_id) => axios.delete(`https://testingsite.pp.ua/api/removeArticle/${article_id}`).then(res => res.data),
        getArticle : (article_id) => axios.get(`https://testingsite.pp.ua/api/article/${article_id}`).then(res => res.data),

        /* images api*/
        addImages : (images) => axios.post(`https://testingsite.pp.ua/api/image`, images).then(res => res.data),
        getImages : () => axios.get(`https://testingsite.pp.ua/api/images`).then(res => res.data),
        removeImage: (image_id) => axios.delete(`https://testingsite.pp.ua/api/removeImage/${image_id}`).then(res => res.data),




        clapArticle : (article_id) => axios.post(`/api/clapArticle`, {article_id}).then(res => res.data)
    }
}