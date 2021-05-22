const fakeNames = ['Pedro', 'Celia', 'marcia', 'tommy', 'fred', 'jessica', 'marcos', 'Pedro']


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

    // console.log(nameEntries)

    const sorted = nameEntries.sort((a, b) => b[1] - a[1])
}
// console.log(count(fakeNames))
sort(count(fakeNames))