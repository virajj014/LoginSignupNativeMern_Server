const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === Bearer ewfjwefjwef
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in, token not given" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in, token invalid" });
        }
        const { _id } = payload;
        User.findById(_id).then(userData => {
            req.user = userData;
            next();
        })
    })
}