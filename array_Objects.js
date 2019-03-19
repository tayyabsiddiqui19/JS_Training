// const notes = ['Note 1', "Note 2", 'Note 3', 'Note 4']

// console.log(notes[notes.length - 1])
// console.log(notes)
// console.log(notes.shift())
// notes.splice(3,1, "New item")
// console.log(notes)
// notes.forEach(function (items){
//     console.log(items)
// })

const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Excercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function(notes, notesTitle) {
    const index = notes.findIndex(function(note, index){
        return notes.title === notesTitle
    })
    return notes[index]
}
const note = findNote(notes, "Office modificaton")
console.log(notes)