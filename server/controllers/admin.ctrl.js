import Admin from './../models/Admin';

module.exports = {

    getAdmin: (req, res) => {
        const { credentials } = req.body;
        console.log(credentials);
        Admin.find({  }).then(admin => {
            console.log(admin);
            if(admin){
                res.json({credentials});
            } else {
                res.status(400).json({errors: {global: 'Invalid credentials'}});
            }
        });
    }

};

