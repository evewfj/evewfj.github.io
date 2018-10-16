var solarLunar = require("solarlunar");

module.exports = function(res, pathname) {
    res.setHeader("Content-Type", "text/html;charset=UTF8");
    // 拿到/date后面的部分  /date/2017/10/11

    if (!/\/date\/\d+\/\d+\/\d+$/.test(pathname)) {
        res.end("日期格式不合法");
        return;
    } else {
        var arr = pathname.match(/\/date\/(\d+)\/(\d+)\/(\d+)$/);
        var year = arr[1];
        var month = arr[2];
        var day = arr[3];
        if (year < 1900 || year > 2100) {
            res.end("年份必须在1900~2100");
        } else if (month > 12 || month < 1 || day > 31 || day < 1) {
            res.end("不合法");
        } else {
            const result = solarLunar.solar2lunar(year, month, day);
            res.end(result.gzYear + '年' +
                result.gzMonth + '月' + result.gzDay + '日');
        }

    }


}