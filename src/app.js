const path = require('path')

const express = require('express')

// require for i18n
const session = require('express-session')
const cookieParser = require('cookie-parser')
const i18n = require('i18n')

const errorController = require('../controllers/error')
const siteController = require('../controllers/siteControl')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('../views', 'views')

// i18n setup
i18n.configure({
    locales: ['en', 'zh_hk', 'zh_cn'],
    directory: path.join(__dirname, '../i18n'),
    defaultLocale: 'zh_hk',
    cookie: 'lhli18n'
})

app.use(cookieParser('lhli18n'))
app.use(session({
    secret: "landrich",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(i18n.init)
// end of i18n setup

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', siteController.getIndex)
app.get('/index', siteController.getIndex)
app.get('/about', siteController.getAbout)
app.get('/services', siteController.getServices)
app.get('/projects', siteController.getProjects)
app.get('/investors', siteController.getInvestors)
app.get('/contact', siteController.getContact)
app.get('/disclaimer', siteController.getDisclaimer)

app.use(cookieParser())   
app.get('/files/:docType/:fileName', (req, res) => {
    var lang = req.cookies['lhli18n']
    if (lang == 'zh_cn') lang = 'zh_hk' // no simplified Chinese version will be available
    var docType = req.params.docType
    var fileName = req.params.fileName
    var filePath = path.join(__dirname, '../public/files/' + lang + '/' + docType + '/' + fileName)
    console.log(filePath)
    res.sendFile(filePath)
})

app.get('/*/zh_hk', (req, res) => {
    var redirectedPath = req.path.split('/')[1]
    res.cookie('lhli18n', 'zh_hk')
    res.redirect('/' + redirectedPath)
})

app.get('/*/zh_cn', (req, res) => {
    var redirectedPath = req.path.split('/')[1]
    res.cookie('lhli18n', 'zh_cn')
    res.redirect('/' + redirectedPath)
})

app.get('/*/en', (req, res) => {
    var redirectedPath = req.path.split('/')[1]
    res.cookie('lhli18n', 'en')
    res.redirect('/' + redirectedPath)
})

app.use(errorController.get404)

app.listen(port, () => {
    console.log('Listening on ' + port) 
})
