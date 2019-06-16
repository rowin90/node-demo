const puppeteer = require('puppeteer');

const url =
  'https://search.jd.com/Search?keyword=%E6%B6%B2%E6%99%B6%E7%94%B5%E8%A7%86&enc=utf-8&suggest=1.def.0.T13&wq=%E6%B6%B2%E6%99%B6%E7%94%B5%E8%A7%86&pvid=0d6c7fded98b43b5afd660b22d3004af';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
  console.log('开始');

  // 声明一个浏览器
  const browser = await puppeteer.launch();

  // 开启新页面
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2' // 当网络空闲时（表示页面加载完毕）
  });

  // 等待 3 秒钟，保证页面加载完
  await sleep(3000);

  // 等待页面中有这个元素
  // await page.waitForSelector('.more');

  // 加载 2 页
  // for (let i = 0; i < 3; i++) {
  //   await sleep(3000);
  //   // 点击更多
  //   await page.click('.more');
  // }

  const result = await page.evaluate(async () => {
    const sleep = time => new Promise(resolve => setTimeout(resolve, time));
    // 页面上所执行的脚本
    var $ = window.$;

    await new Promise(async (resolve, reject) => {
      var maxH = $(document).height() - $(window).height();
      let realH = 0;
      while (realH < maxH + 1000) {
        maxH = $(document).height() - $(window).height();
        console.log(realH);
        $(document).scrollTop(realH);
        await sleep(3000);
        realH += 1000;
      }
      resolve();
    });

    var items = $('#J_goodsList .gl-item');

    var links = [];

    if (items.length >= 1) {
      items.each((index, item) => {
        let it = $(item);
        var picbox = it.find('.p-img');

        var price = it
          .find('.p-price')
          .find('i')
          .text();
        var title = it
          .find('.p-name')
          .find('em')
          .text();
        let img = picbox.find('img').attr('src');

        img = 'https:' + img.replace('com/n7/', 'com/n0/');

        let href = picbox.find('a').attr('href');
        href = 'https:' + href;

        links.push({
          img,
          href,
          price,
          title
        });
      });
    }

    return links;
  });
  console.log('爬取完毕');
  browser.close();

  // 发送出去
  process.send({ result });
  console.log('发送完毕');
  // 退出进程

  //process.exit(0);
})();
