const User = require('../models/user.model');



module.exports.login = (req, res) => {
   res.render('auth/login');
}
module.exports.postLogin = async (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   const user = await User.find({email: email});
   const checkemail = user.find(userArr => userArr.email === email);
   if(!checkemail){
      res.render('auth/login',{
         errors: [
            'User does not exist.'
         ],
         values: req.body
      });
      return;
   }
   const checkpass = user.find(userArr => userArr.password === password);
   if (!checkpass) {
      res.render('auth/login',{
         errors: [
            'Wrong password.'
         ],
         values: req.body
      });
      return;
   }
   res.redirect('/user/' + checkpass.id);
};