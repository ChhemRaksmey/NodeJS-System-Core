const express = require('express');
const router = express.Router();

router.get('/user-privilege', (req, res) => {
  res.render('pages/PageUserPrivilege', { title: 'User Privilege' });
});

module.exports = router;