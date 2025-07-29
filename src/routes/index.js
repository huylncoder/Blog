const newsRouter = require('./news.js');
const siteRouter = require('./site.js');

const route = (app) => {
    // sủ dụng router nào math với tuyến đường
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
};

module.exports = route;
