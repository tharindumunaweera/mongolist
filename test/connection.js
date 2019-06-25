const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function () {
    console.log('connection has made ,now make fire works');
}).on('error', function (error) {
    console.log('connection error:', error);
})