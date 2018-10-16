var pinyin = require("pinyin");

module.exports = function(res, pathname) {
    res.setHeader("Content-Type", "text/html;charset=UTF8");
    // 拿到/pinyin后面的部分
    var word = decodeURIComponent(pathname.match(/\/pinyin\/(.+)$/)[1]);
    res.end(pinyin(word).toString());
}