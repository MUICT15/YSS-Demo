const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/YSS');

module.exports = mongoose.model('ToDos', { ToDo: String });