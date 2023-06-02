
var path = require('path')

console.log(__filename)
var pathObj = path.parse(__filename)
console.log(path.join(pathObj.dir,'..','images'))
