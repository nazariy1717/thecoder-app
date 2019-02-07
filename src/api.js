import axios from 'axios';

// const url = 'https://testingsite.pp.ua';
const url = 'http://localhost:8080';


export default{
    admin:{
        login: (credentials) => axios.post(`${url}/api/admin-auth`,{credentials}).then(res => res.data)
    },
    articles:{

        /* articles api*/
        addArticle: (article) => axios.post(`${url}/api/article`, article).then(res => res.data),
        getArticles: (lang) => axios.post(`${url}/api/articles`, lang).then(res => res.data),
        getArticle : (article_id, lang) => axios.post(`${url}/api/article/${article_id}`, lang).then(res => res.data),
        removeArticle: (article_id) => axios.delete(`${url}/api/removeArticle/${article_id}`).then(res => res.data),

        /* images api*/
        addImages : (images) => axios.post(`${url}/api/image`, images).then(res => res.data),
        getImages : () => axios.get(`${url}/api/images`).then(res => res.data),
        removeImage: (image_id) => axios.delete(`${url}/api/removeImage/${image_id}`).then(res => res.data),



        clapArticle : (article_id) => axios.post(`${url}/api/clapArticle`, {article_id}).then(res => res.data)
    }
}