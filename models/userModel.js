const { model, Schema } = require('../connection');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('user', userSchema);