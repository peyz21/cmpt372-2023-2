var path = require('path')
var fs = require('fs')

var filename = process.argv[2]

var filePath = path.join(__dirname,filename)
var contents = fs.readFileSync(filePath)
console.log(contents)

fs.readFile(filePath,'UTF-8', (err,contents)=>{
    console.log(contents)
})