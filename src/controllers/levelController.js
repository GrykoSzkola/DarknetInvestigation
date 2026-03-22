const crypto = require('crypto');
const fs = require('fs');

function showLevel1(req, res) {
    res.render('level1', { layout: 'layout' });
};

function showLevel2(req, res) {
    const key = req.query.key;
    if (key === 'secretkey') {
        res.render('level2', { layout: 'layout' });
    } else {
        res.render('level1', { layout: 'layout', error: 'Wrong key' });
    }
};

function showLevel3(req, res) {
    const cookie = req.cookies.level3;
    if (cookie === 'darkweb') {
        res.render('level3', { layout: 'layout' });
    } else {
        res.cookie('level3', 'darkweb');
        res.render('level1', { layout: 'layout', error: 'cookie not set' });
    }
};

function showLevel4(req, res) {
    const header = req.headers['secret'];
    if (header === 'secretHeader') {
        res.render('level4', { layout: 'layout' });
    } else {
        res.render('level1', { layout: 'layout', error: 'header' });
    }
};

function showLevel5(req, res) {
    const word = "crypto";
    const hash = crypto.createHash('sha256').update(word).digest('hex');

    if (req.query.answer === hash) {
        res.render('level5', { layout: 'layout' });
    } else {
        console.log("hash:", hash);
        res.render('level1', { layout: 'layout', error: 'Wrong answer' });
    }
}

function showLevel6(req, res) {
    const code = req.query.code;
    if (code === 'secret10') {
        res.render('final', { layout: 'layout' });
    } else {
        res.render('level1', { layout: 'layout', error: 'Wrong code' });
    }
}

function showFinal(req, res) {
    res.render('final', { layout: 'layout' });
};

module.exports = { showLevel1, showLevel2, showLevel3, showLevel4, showLevel5, showLevel6, showFinal };
