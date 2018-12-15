const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema({
   name: String,
   password: String,
   phone: String,
   email: String
});
// userSchema.index({name: 'text'});
userSchema.index({'$**': 'text'});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;