const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/devspark_edu');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Failure!');
    }
};

module.exports = { connect };
