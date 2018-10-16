var nzh = require("nzh/cn");
module.exports = function(res, pathname) {
    res.setHeader("Content-Type", "text/html;charset=UTF8");
    // 拿到/num后面的部分
    var money = pathname.match(/\/num\/(.+)$/)[1];
    var toMoney = nzh.toMoney(money);
    if (money == toMoney) {
        res.end("不合法输入");
    } else {
        res.end(toMoney);
    }

}