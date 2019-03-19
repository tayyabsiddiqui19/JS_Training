let myBook = {
    title: "Pakistan",
    author: "Tayyab",
    pages: 345
}
let otherBook = {
    title: "India",
    author: "Zumair",
    pages: 543
}
let getSummary = function(book) {
   // console.log(`Book name: ${book.title} by author: ${book.author}`)
   return {
       Summary: `Book name: ${book.title} by author: ${book.author}`,
       pageCountSummary: `${book.title} is ${book.pages} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherbookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherbookSummary.Summary)