console.log("hello world")

// var p = [{name:'bobby',age:42},{name:'sarah',age:38}]
// console.table(p)

console.time('flag')
setTimeout(function(){
    console.log(console.timeEnd('flag'))
},1000)

console.log("hello world 2")