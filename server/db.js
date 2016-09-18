var mongoose =  require('mongoose'),
    Schema =    mongoose.Schema,
    init =      require('./init'),

    userSchema =    new Schema({
        name: String,
        password: String,
    }),

    articleSchema = new Schema({
        title: String,
        date: Date,
        content: String,
    }),

    linkSchema =    new Schema({
        name: String,
        href: String,
    }),

    User =      mongoose.model('User', userSchema),
    Article =   mongoose.model('Article', articleSchema),
    Link =      mongoose.model('Link', linkSchema),

    admin =     new User(init.admin),
    visitor =   new User(init.visitor),
    article =   new Article(init.article),
    link =      new Link(init.link)


mongoose.connect('mongodb://localhost/platform')
mongoose.set('debug', true)

var db = mongoose.connection
db.on('error', function () {
    console.log('error')
})
db.once('open', function () {
    console.log('opened')

    User.find(null, function (err, doc) {
        if (err) {
            console.log(err)
        } else {
            if (!doc[0]) {
                visitor.save(function (err) {
                    if (err)return console.log(err)
                })

                link.save(function (err) {
                    if (err)return console.log(err)
                })

                admin.save(function (err) {
                    if (err)return console.log(err)
                })
                article.save(function (err) {
                    if (err)return console.log(err)
                })
            }
        }
    })
})

module.exports = {
    User: User,
    Article: Article,
    Link: Link
}