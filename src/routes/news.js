const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');

// đối với tài nguyên cụ thể như news thì sẽ có nhiều tuyến đường con bên trong,
// nên sẽ phải kiểm tra xem math tuyến đường nào. sau đó gọi đến controller
router.get('/:slug', newController.detailNew);
router.get('/', newController.createNew);

module.exports = router;
