const puppeteer =  require("puppeteer");


async function getElementDate(page, xpath, property){

    const [el] = await page.$x(xpath);
    let result = "";
    if(el){
        const src = await el.getProperty(property);
        result = await src.jsonValue();
    }
    return result;
}

async function scrape(url){
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
        await page.goto(url);
        
        let name = await getElementDate(page, '/html/body/div/h2', 'textContent');
        let manufacturer = await getElementDate(page, '/html/body/div/dl/dd[1]', 'textContent');
        let genre = await getElementDate(page, '/html/body/div/dl/dd[2]', 'textContent');
        let screenshot = await getElementDate(page, '/html/body/div/section[3]/div/div/div[1]/img', 'src'); 

        console.log(JSON.stringify({name, manufacturer, genre, screenshot}, null, 4));

    }catch(e){
        console.log(e);
    }

    await page.close();
    await browser.close();
    

}

scrape("https://www.nesfiles.com/NES/Castlevania/")
.then(() => {})
.catch(e => console.log('error: ' + e));

// scrape("https://www.nesfiles.com/NES/Contra/")
// .then(() => {})
// .catch(e => console.log('error: ' + e));

// scrape("https://www.nesfiles.com/NES/Super_Mario_Bros_3/")
// .then(() => {})
// .catch(e => console.log('error: ' + e));