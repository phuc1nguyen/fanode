import express from 'express';
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Respond with a resource');
});

export default router;
