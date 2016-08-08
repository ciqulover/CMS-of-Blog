var express = require('express');
var router = express.Router();


var db = require('./db')


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
})

router.post('/login', function (req, res, next) {
    console.log(req.body)
    var name = req.body.userName,
        password = req.body.password,
        resBody={state:''}

    db.User.findOne({name: name}, 'password', function (err, doc) {
        setTimeout(function () {
            console.log(doc)
            if (err) {
                return console.log(err)
            } else if (!doc) {
                resBody.state='账号不存在'
                console.log('not found')
                res.send(resBody)
            } else if (doc.password === password) {
                resBody.state='登陆成功'
                console.log('success')
                res.send(resBody)
            } else {
                resBody.state='密码错误'
                console.log('wrong password')
                res.send(resBody)
            }
        },1000)
    })
})
router.get('/article', function (req, res, next) {
    var id = req.query.id
    db.Article.findOne({_id: id}, function (err, doc) {
        if (err) {
            return console.log(err)
        } else if (doc) {
            res.send(doc)
        }
    })
})
router.get('/articleList',function (req, res, next) {
    db.Article.find(null, 'title date' , function (err, doc) {
        console.log(doc)
        if (err) {
            return console.log(err)
        } else if (doc) {
            res.send(doc)
        }
    })
})
router.post('/save', function (req, res, next) {
    console.log(req.body)

    var newArticle=new db.Article({
        title:req.body.title,
        date:req.body.date,
        content:req.body.input
    })
    newArticle.save(function (err) {
            if(err)return console.log(err)
    })

})
module.exports = router;