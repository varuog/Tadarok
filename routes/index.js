var express = require('express');
var router = express.Router();
var ProjectController=require('../controller/ProjectController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/project', ProjectController.index);
router.post('/project', ProjectController.create);
router.get('/project/:id', ProjectController.show);
router.put('/project/:id', ProjectController.update);
router.delete('/project/:id', ProjectController.destroy);


module.exports = router;
