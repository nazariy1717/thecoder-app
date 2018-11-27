import Admin from './../models/Admin';

module.exports = {

    getAdmin: (req, res) => {
        const { credentials } = req.body;
        console.log(credentials);
        Admin.findOne({ login: credentials.login }).then(admin => {
            if(admin && admin.isValidPassword(credentials.password)){
                res.json({ admin: admin.toAuthJson() });
            } else {
                res.status(400).json({errors: {global: 'Invalid credentials'}});
            }
        });
    }

};

