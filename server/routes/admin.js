import adminController from "./../controllers/admin.ctrl";

module.exports = (router) => {

    /** get admin */
    router.route('/').get(adminController.getAdmin);

};