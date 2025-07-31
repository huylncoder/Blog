const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

const route = require('./routes');
const db = require('./config/data/connectDB');

// connect to database
db.connect();

// Gọi hàm express nó sẽ trả về đối tượng đại diện ứng dụng NodeJS để xây dựng(web)
const app = express();
const port = 3000;

// cấu hình file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// middleware xử lý dữ liệu form khi submit
app.use(express.urlencoded());
app.use(express.json());

// morgan là middleware giúp log các request đến server // HTTP logger
// app.use(morgan("combined"));

// cấu hình templates engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

// start server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
