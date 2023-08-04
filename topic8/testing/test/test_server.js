var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  it('should list ALL users on /users-api GET', function(done){
    chai.request(server).get('/users-api').end(function(err,res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });
  it('should add a SINGLE user on /users-api POST', function(done){
    chai.request(server).get('/users-api').end(function(err,res){
      var num_users0 = res.body.length;

      chai.request(server).post('/users-api').send({'fname':'tester','lname':'mctesty','age':'23'})
        .end(function(err,res){
          var num_users = res.body.length;

          (num_users-num_users0).should.equal(1);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].fname.should.equal('tester');
          res.body[0].lname.should.equal('mctesty');
          done();
        });

    });

  });

  // it('should delete a user on /user-api/<id> DELETE', function(done){
    
  // });

  it ('should create a session on login', function(done){
    chai.request(server).post('/login').send({uname:'bobbyc','password':'12345'})
    .end((err,res)=>{
      res.should.have.cookie('session')
      res.should.have.status(200)
    })
  })



});
