var http = require("http");
var url = require("url");
var fs = require("fs");
var shownum = require("./controllers/shownum.js");
var showdate = require("./controllers/showdate.js");
var showpinyin = require("./controllers/showpinyin.js");

var server = http.createServer(function(req, res) {
    //    127.0.0.1:4000/  显示对老师说的话 
    //    127.0.0.1:4000/num/123?name=123  大写

    // 拿到用户访问地址的主干部分 
    var pathname = url.parse(req.url, true).pathname;

    if (pathname == "/") {
        res.setHeader("Content-Type", "text/html;charset=UTF8");
        fs.readFile("./public/index.html", function(err, data) {
            res.end(data);
        });
    } else if (/\/num\/.+$/.test(pathname)) {
        shownum(res, pathname);
    } else if (/\/date\/.+$/.test(pathname)) {
        showdate(res, pathname);
    } else if (/\/pinyin\/.+$/.test(pathname)) {
        showpinyin(res, pathname);
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html;charset=UTF8");
        res.end("<h1>对不起 没有这个页面</h1>");
    }
});


server.listen(4000);