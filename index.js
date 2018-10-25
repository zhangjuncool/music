const $express = require('express');
var router = $express.Router();
router.get('/register', function (req, res) {
   res.sendFile(__dirname+'/public/register.html');
});
router.get('/index', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
router.get('/my_song', function (req, res) {
    res.sendFile(__dirname+'/public/my_song.html');
});
router.get('/download', function (req, res) {
    res.sendFile(__dirname+'/public/download.html');
});
router.get('/music_number', function (req, res) {
    res.sendFile(__dirname+'/public/music_number.html');
});
router.get('/error', function (req, res) {
    res.sendFile(__dirname+'/public/error.html');
});
module.exports = router;