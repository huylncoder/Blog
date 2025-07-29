class NewsController {
    // [GET] /news
    createNew(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    detailNew(req, res) {
        res.send('detail new page');
    }
}

module.exports = new NewsController();
