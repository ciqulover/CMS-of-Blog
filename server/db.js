const mongoose = require('mongoose')
const init = require('./init.json')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  pwd: String,
})

const articleSchema = new Schema({
  title: String,
  date: Date,
  content: String,
})

const linkSchema = new Schema({
  name: String,
  href: String,
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  Link: mongoose.model('Link', linkSchema)
}

const errorPrinter = err=> {
  if (err) {
    console.log(err)
    process.exit(1)
  }
}
mongoose.connect('mongodb://127.0.0.1/CMS2')
// mongoose.set('debug', true)

const db = mongoose.connection
db.on('error', function () {
  console.log('Database connection error.')
})
db.once('open', function () {
  console.log('The database has connected.')

  Models.User.find(null, function (err, doc) {
    if (err) {
      console.log(err)
      process.exit(1)
    } else {
      if (!doc[0]) {
        init.forEach(item=>new Models[item.type](item).save(errorPrinter))
      }
    }
  })
})

module.exports = Models
