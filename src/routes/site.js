const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// đối với tài nguyên KHÔNG cụ thể như homePage thì kiểm tra xem math tuyến đường nào.
// sau đó gọi đến controller
router.get('/search', siteController.search);
router.get('/', siteController.homePage);

module.exports = router;
