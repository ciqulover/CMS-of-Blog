var express = require('express');
var router = express.Router();
var db = require('./db')

router.get('/', function (req, res, next) {
    res.render('index', {});
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

router.get('/articleList', function (req, res, next) {
    db.Article.find(null, 'title date', function (err, doc) {
        if (err) {
            return console.log(err)
        } else if (doc) {
            res.send(doc)
        }
    })
})

router.post('/login', function (req, res, next) {
    var name = req.body.userName,
        password = req.body.password,
        resBody = {state: ''}
    db.User.findOne({name: name}, 'password', function (err, doc) {
        if (err) {
            return console.log(err)
        } else if (!doc) {
            resBody.state = '账号不存在'
            res.send(resBody)
        } else if (doc.password === password) {
            resBody.state = '登陆成功'
            res.send(resBody)
        } else {
            resBody.state = '密码错误'
            res.send(resBody)
        }
    })
})

router.post('/save', function (req, res, next) {
    if (req.body.id) {
        var obj = {
            title: req.body.title,
            date: req.body.date,
            content: req.body.input
        }

        db.Article.findByIdAndUpdate(req.body.id, obj, function () {
        })
    } else {
        var newArticle = new db.Article({
            title: req.body.title,
            date: req.body.date,
            content: req.body.input
        })
        newArticle.save(function (err) {
            if (err)return console.log(err)
        })
    }
    res.send('OK')
})

router.post('/getLinks', function (req, res, next) {
    db.Link.find(null, function (err, doc) {
        if (err) {
            return console.log(err)
        } else if (doc) {
            res.send(doc)
        }
    })
})

router.post('/setLinks', function (req, res, next) {
    db.Link.remove(null, function (err) {})
    req.body.links.forEach(function (item) {
        new db.Link({
            name: item.name,
            href: item.href
        }).save(function (err) {
            if (err)return console.log(err)
        })
    })
    res.send('ok')
})

router.post('/savePw', function (req, res, next) {
    var name = req.body.userName,
        password = req.body.password
    db.User.findOneAndUpdate({name: name},
        {password:password},
        function () {})
    res.send('ok')
})

router.post('/delete', function (req, res, next) {
    db.Article.findByIdAndRemove(req.body.id, function (err) {
        console.log(err)
    })
    res.send('ok')
})
module.exports = router;