import express from 'express';
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Different routes
routes(app);

app.get('/', (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});