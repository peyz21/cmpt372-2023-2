exports = class User{
    constructor(fname,lname,age){
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    fullName = function() {
        console.log(this.fname + " " + this.lname)
    }
}

exports = function hello() {

}
