const prompt = require('prompt-sync')();
const Analyzer = require('./Analyzer')

let filename = prompt("Enter file name: ")

let content = Analyzer.readTextFile(filename)
let wordcount = Analyzer.countWords(content)
let top5Words = Analyzer.top5Words(content)

console.log(`> Word Count: ${wordcount}`)
console.log(`> Top 5 Most Frequent Words:`)
top5Words.forEach((w, i) => {
    console.log(`> ${i+1}. ${w}`)
})