const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.render('pages/PageUser', { title: 'User Setup' });
});

module.exports = router;