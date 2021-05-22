const puppeteer = require('puppeteer')


async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/p/CIUIwo8FUJc/')

    
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