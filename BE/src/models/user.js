const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    "email": {type: String, required: true, unique: true},
    "password": { type: String, required: true },
    "fullname": { type: String, required: true },
    "socialLogin": {
        "googleId": String,
        "facebookId": String
    },
    "avatar": String,
    "role": {type: String, default: 'user'},
    "isEmailVerified": Boolean,
    "resetPasswordToken": String,
    "resetPasswordExpires": Date
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
