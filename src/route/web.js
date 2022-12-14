import express from 'express';

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', (req, res) => {
        return res.send("Hello world")
    });

    // router.get('/tuan', (req, res) => {
    //     return res.send("Hello Tuan");
    // });
    return app.use('/', router);
}

module.exports = initWebRoutes;