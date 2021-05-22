const fakeNames = ['Pedro', 'Celia', 'marcia', 'tommy', 'fred', 'jessica', 'marcos', 'Pedro']


function count(names){
    const count = {}

    names.forEach(name => { count[name] = (count[name] || 0) + 1})

    return count
}


function sort(countedNames){
    const nameEntries = []

    for(prop in countedNames){
        console.log(prop)
    }
}
// console.log(count(fakeNames))
// sort(count(fakeNames))