# puppeteerScrapeTest
Scrape test for puppeteer library

usage:

call the scrape method like this:
```javascript 
scrape("https://www.site.com").then(() => {console.log('\nsuccess')}).catch(e => console.log('error: ' + e));
```

modify the scrape method with the desired elements
get the element:
```javascript
let name = await getElementDate(page, '/html/body/div/h2', 'textContent');
//or
let imgUrl = await getElementDate(page, '/html/body/div/img', 'src');
```
