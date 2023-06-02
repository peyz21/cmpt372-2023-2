var users = []

function nextUsr(){
    process.stdout.write(' next user ')
}

process.stdin.on('data', function(data){
    if (data.toString().trim() !== 'exit'){
        users.push(data.toString().trim())
        nextUsr()
    } else {
        process.exit()
    }
})
