import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});