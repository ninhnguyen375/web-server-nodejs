require('dotenv').config();
//Some require
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Router
const userRoute = require('./route/user.route');
const authRoute = require('./route/auth.route');
const productRoute = require('./route/product.route');
const apiProductRoute = require('./api/route/product.route');


const app = express();
const port = process.env.PORT || 3000 || 8080;

// Parse JSON 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongo database
try {
   mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
} catch (error) {
   console.log(error);
}

//view pug
app.set('view engine', 'pug');
app.set('views', './views');

//public dir
app.use('/node_modules', express.static('node_modules/'));
app.use(express.static('public'));


// Use Router
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);

// API
app.use('/api/product', apiProductRoute);

//Page home
app.get('/', (req, res) => {
   res.render('home/index', {
      name: 'Admin'
   });
});

//Listen Port
app.listen(port, () => {
   console.log('Server listening on port ' + port);
});