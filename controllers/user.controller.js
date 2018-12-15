const User = require('../models/user.model');
const shortid = require('shortid');


module.exports.search = (req, res) => {
   var name = req.query.name;
   var matched = db.get('users').value().filter((user)=>{
      return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
   });
   res.render('user/index', {
      users: matched,
      name
   });
};

module.exports.index = async (req, res) => {
   const users = await User.find();

   res.render('user/index', {
      users: users
   });
}

module.exports.postCreate = async (req, res) => {
   
   await User.insertMany([req.body]);
   // db.get('users').push(req.body).write();
   res.redirect('/user');
};

module.exports.create = (req, res) => {
   res.render('user/create');
};

module.exports.getUser = (req, res) => {
   const id = req.params.id;
   var user = db.get('users').find({
      id: id
   }).value();
   res.render('user/view', {
      user: user
   });
};
