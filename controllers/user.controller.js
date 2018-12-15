const User = require('../models/user.model');


module.exports.search = async (req, res) => {
   const qName = req.query.name;
   const users = await User.find();
   const matched = users.filter((user)=>{
      return user.name.toLowerCase().indexOf(qName.toLowerCase()) !== -1;
   }); 
   res.render('user/index', {
      users: matched
   });
};

module.exports.index = async (req, res) => {
   const users = await User.find();
   res.render('user/index', {
      users: users
   });
};

module.exports.postCreate = async (req, res) => {
   await User.insertMany([req.body]);
   res.redirect('/user');
};

module.exports.create = (req, res) => {
   res.render('user/create');
};

module.exports.getUser = async (req, res) => {
   const paramsId = req.params.id;
   const user = await User.findById(paramsId);
   res.render('user/view', {
      user: user
   });
};
