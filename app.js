const errorHandler = require('./common/middlewares/error-handler.middleware');
const citiesController = require('./cities/cities.controller');
const express = require('express');
const app = express();

app.use('/cities', citiesController);

app.listen(3000, () => {
    console.log('Server is running! 🚀');
})

app.use(errorHandler);