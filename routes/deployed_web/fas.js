const express = require('express');
const router = express.Router();
                                                                                                                                                      
router.get('/fas/account',  (req, res) => { res.render('pages/fas/PageAccount',  { }); });
router.get('/fas/booking',  (req, res) => { res.render('pages/fas/PageBooking',  { }); });
router.get('/fas/disposal', (req, res) => { res.render('pages/fas/PageDisposal', { }); });
router.get('/fas/model',    (req, res) => { res.render('pages/fas/PageModel',    { }); });
router.get('/fas/request',  (req, res) => { res.render('pages/fas/PageRequest',  { }); });
router.get('/fas/reverse',  (req, res) => { res.render('pages/fas/PageReverse',  { }); });
router.get('/fas/supplier', (req, res) => { res.render('pages/fas/PageSupplier', { }); });
router.get('/fas/lifetime', (req, res) => { res.render('pages/fas/PageLifetime', { }); });
router.get('/fas/transfer', (req, res) => { res.render('pages/fas/PageTransfer', { }); });

module.exports = router;