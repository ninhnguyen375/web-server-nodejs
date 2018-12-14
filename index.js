//Some require
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./route/user.route');

const app = express();
const port = process.env.PORT || 3000 || 8080;

//some thing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', userRoute);
app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
   res.render('home/index', { 
      name: 'Admin'
   });
});

app.listen(port, () => {
   console.log('Server listening on port ' + port);
});