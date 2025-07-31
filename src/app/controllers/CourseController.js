const Course = require('../models/Course');

class CourseController {
    // [GET]
    async courseDetail(req, res) {
        try {
            const courseDetail = await Course.findOne({ slug: req.params.slug }).lean();
            res.render('courses/courseDetail', { courseDetail });
        } catch (error) {
            res.status(400).json({ error: 'ERROR' });
        }
    }
}

module.exports = new CourseController();
