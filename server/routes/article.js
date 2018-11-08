import articleController from "./../controllers/article.ctrl";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + `_`+file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


module.exports = (router) => {

    /* add an article */
    router.post('/article', upload.single('image'), articleController.addArticle);

    /* get all articles */
    router.route('/articles').get(articleController.getAll);

    /* remove an article */
    router.delete('/removeArticle/:articleId', articleController.removeArticle);




    /* clap on an article */
    router.route('/article/clap').post(articleController.clapArticle);

    /* get an article */
    router.route('/article/:id').get(articleController.getArticle)

};