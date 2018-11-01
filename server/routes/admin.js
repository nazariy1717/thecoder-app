import adminController from "./../controllers/admin.ctrl";

module.exports = (router) => {

    /** get admin */
    router.post('/admin-auth',adminController.getAdmin);

};