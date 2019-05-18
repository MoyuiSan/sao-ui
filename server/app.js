let express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
let app = express();

app.get('/', (req, res, next) => {
    console.log(req)
    superagent.get('https://music.163.com/')
        .ca(ca)
        .end((err, sres) => {
            // 常规的错误处理
            if (err) {
                return next(err);
            }
            // console.log(sres.text)
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            let $ = cheerio.load(sres.text);
            let items = [];
            $('.d-flag').each((idx, element) => {
                let $element = $(element);
                items.push({
                    // title: $element.text(),
                    href: $element.attr('src')
                });
            });
            res.send(sres.text);
        });
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});