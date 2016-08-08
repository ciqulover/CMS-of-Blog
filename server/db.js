var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/platform')
mongoose.set('debug',true)
var Schema=mongoose.Schema
var userSchema=new Schema({
    name:String,
    password:String,
})
var articleSchema=new Schema({
    title:String,
    date:Date,
    content:String,
})
var User=mongoose.model('User',userSchema)
var Article=mongoose.model('Article',articleSchema)

var ycwalker=new User({
    name:'ycwalker',
    password:'111'
})

var someAcs=new Article({
    title:'h',
    date:new Date(),
    content:''

})


var db = mongoose.connection
db.on('error', function () {
    console.log('error')
})
db.once('open', function () {
    console.log('opened')
    // ycwalker.save(function (err) {
    //     if(err)return console.log(err)
    // })
    // someAcs.save(function (err) {
    //     if(err)return console.log(err)
    // })
})

module.exports={
    User:User,
    Article:Article
}