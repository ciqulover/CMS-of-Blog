const fs=require('fs')
const path=require('path')
const express=require('express')
// const favicon=require('serve-favicon')
const bodyParser=require('body-parser')
const cookieParser = require('cookie-parser')
// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const resolve=file=>path.resolve(__dirname,file)

const api=require('./api')

const app=express()

//todo
app.set('port',(process.env.port||3000))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/dist',express.static(resolve('../dist')))
app.use(api)

app.get('*',function (req,res) {
  const html=fs.readFileSync(resolve('../index.html'),'utf-8')
  res.send(html)
})

// app.use(favicon(resolve('')))

app.listen(app.get('port'),function () {
  console.log('Visit http://localhost:3000')
})
