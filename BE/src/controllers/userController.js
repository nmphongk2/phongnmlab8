const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authController = {
    // Đăng ký
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                email: req.body.email,
                password: hashed,
            });
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ msg: 'Server error', error: err.message });
        }
    },

    // Đăng nhập
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ msg: 'Email Không tồn tại' });
            }

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                return res.status(404).json({ msg: 'Mật Khẩu Không Chính Xác' });
            }

            if (user && validPassword) {
                const payload = {
                    id: user.id,
                    role: user.role,

                };
                const jwtSecret = process.env.JWT_ACCESS_KEY;
                if (!jwtSecret) {
                    throw new Error('JWT_ACCESS_KEY is not defined');
                }

                const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
                const {password, ...others} = user._doc
                return res.status(200).json({ ...others, accessToken: token });
            }
        } catch (err) {
            return res.status(500).json({ msg: 'Server error', error: err.message });
        }
    }
};


module.exports = authController;
