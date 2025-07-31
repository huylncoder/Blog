const Course = require('../models/Course');

class SiteController {
    // [GET] /
    async homePage(req, res) {
        try {
            const courses = await Course.find({}).lean();
            res.render('home', { courses });
        } catch (error) {
            res.status(400).json({ error: 'ERROR' });
        }
    }
    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
