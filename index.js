const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/post', postRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the workshop demo');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});