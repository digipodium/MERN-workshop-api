const { model, Schema } = require('../connection');

const userSchema = new Schema({
    title: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('posts', userSchema);