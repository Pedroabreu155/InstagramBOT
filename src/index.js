const puppeteer = require('puppeteer')


async function start(){

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

   async function loadMoreComents(page, classSelector){
        const moreCommentsBtn = await page.$(classSelector)//pega o botao q carrega mais comentários

        if(moreCommentsBtn){
            await moreCommentsBtn.click()
            await page.waitFor(classSelector, {timeout: 4000})
            await loadMoreComents(page, classSelector)
        }
    }


    await page.goto('https://www.instagram.com/p/CO_cxkJpQBv/')
    await loadMoreComents(page, '.dCJp8')


}

// const fakeNames = ['Pedro', 'Celia', 'marcos', 'marcia', 'tommy', 'fred', 'jessica', 'marcos', 'Pedro']


function count(names){
    const count = {}

    names.forEach(name => { count[name] = (count[name] || 0) + 1})

    return count
}


function sort(countedNames){
    const nameEntries = []

    for(prop in countedNames){
        // console.log(prop)
        nameEntries.push([prop, countedNames[prop]])
    }

    const sorted = nameEntries.sort((a, b) => b[1] - a[1])
    // console.log(nameEntries)
}
// console.log(count(fakeNames))
sort(count(fakeNames))