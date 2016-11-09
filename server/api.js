const express = require('express')
const router = express.Router()
const db = require('./db')
const fn = ()=> {}

router.get('/api/getArticle', function (req, res) {
  const _id = req.query.id
  db.Article.findOne({_id}, function (err, doc) {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
})

router.get('/api/getArticles', function (req, res) {
  db.Article.find(null, 'title date content', function (err, doc) {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(JSON.stringify(doc))
    }
  })
})

router.post('/api/login', function (req, res) {
  const {name, pwd}=req.body
  db.User.findOne({name}, 'pwd', function (err, doc) {
    switch (true) {
      case !!err:
        console.log(err)
        break
      case !doc:
        res.send({state: 0, msg: '账号不存在'})
        break
      case doc.pwd === pwd:
        res.send({state: 1, msg: '登陆成功'})
        break
      case doc.pwd !== pwd:
        res.send({state: 2, msg: '密码错误'})
        break
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
})

router.post('/api/saveArticle', function (req, res) {
  const id = req.body._id
  const article = {
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  }
  if (id) {
    db.Article.findByIdAndUpdate(id, article, fn)
  } else {
    new db.Article(article).save()
  }
  res.status(200).end()
})


router.post('/api/deleteArticle', function (req, res) {
  db.Article.findByIdAndRemove(req.body.id, fn)
  res.status(200).end()
})

router.post('/api/getLinks', function (req, res) {
  db.Link.find(null, function (err, doc) {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
})

router.post('/api/saveLinks', function (req, res) {
  const links = req.body || []
  db.Link.remove(null, fn)
  links.forEach(function ({name, href}) {
    new db.Link({name, href}).save()
  })
  res.status(200).end()
})

router.post('/api/savePwd', function (req, res) {
  const {name, pwd}=req.body
  db.User.findOneAndUpdate({name}, {pwd}, function () {
  })
  res.status(200).end()
})

module.exports = router
