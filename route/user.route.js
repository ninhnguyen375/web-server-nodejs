const express = require('express');

const router = express.Router();
const controller = require('../controllers/user.controller');


router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

router.get('/', controller.index);

router.get('/:id', controller.getUser);

//Important
module.exports = router;