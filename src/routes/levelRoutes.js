const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const { showLevel1, showLevel2, showLevel3, showLevel4, showLevel5, showLevel6, showFinal } = require('../controllers/levelController');

router.get('/', (req, res) => res.redirect('/level1'));
router.get('/level1', showLevel1);

router.get('/level2', showLevel2);

router.get('/level3', showLevel3);

router.get('/level4', showLevel4);

router.get('/level5', showLevel5);

router.get('/level6', showLevel6);

router.get('/final', showFinal);

module.exports = router;