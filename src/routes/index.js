const coursesRouter = require('./courses');
const newsRouter = require('./news');
const siteRouter = require('./site');

const route = (app) => {
    // sủ dụng router nào math với tuyến đường
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
};

module.exports = route;
