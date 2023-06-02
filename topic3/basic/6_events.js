var events = require('events')
var EventEmitter = events.EventEmitter

class moveEvent extends EventEmitter {

}

var m = new moveEvent()
m.on('move',function(metainfo){
    console.log("move was made")
    // respond to the move
})

m.emit('move',{dir:'right',player:'...'})