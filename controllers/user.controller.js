const db = require('../db');
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

module.exports.index = (req, res) => {
   res.render('user/index', {
      users: db.get('users').value()
   });
}

module.exports.postCreate = (req, res) => {
   req.body.id = shortid.generate();
   db.get('users').push(req.body).write();
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
