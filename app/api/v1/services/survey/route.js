const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/random')
  .get((req, res) => controller.randomSamples(req, res));

module.exports = router;
