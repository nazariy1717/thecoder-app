import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let AdminSchema = new mongoose.Schema({
    login: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
}, { timestamps: true });

AdminSchema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash)
};

AdminSchema.methods.generateJWToken = function generateJWToken(){
    return jwt.sign({
       login: this.login
    }, 'secretkey');
};

AdminSchema.methods.toAuthJson = function toAuthJson(){
    return {
        login: this.login,
        token: this.generateJWToken()
    }
};

export default mongoose.model('Admin', AdminSchema);