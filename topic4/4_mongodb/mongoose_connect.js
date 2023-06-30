var mongoose = require('mongoose')

mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://root/cmpt372?retryWrites=true&w=majority")

var db = mongoose.connection

db.on("error", console.error.bind(console, "error message"))

var Schema = mongoose.Schema

var userSchema = new Schema({
    uname: {type: String},
    age: {type: Number, min:[0,'not born yet!'], max:110},
    password: {type: String, minlength:4}
})

var User = mongoose.model("user", userSchema)

var creatUser = async() => {
    var b = new User({uname:"steve",age:42,password:"45"})
    try {
        await b.save()
        console.log("done!")
    } catch (e) {
        console.log(e.errors)
    }
    process.exit()
}

creatUser()
