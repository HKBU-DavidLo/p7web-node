const mongoDB = require('../src/utils/database')

exports.getIndex = (req, res) => {
    res.render('index', {
        pageTitle: '譽燊豐控股有限公司',
        path: '/index'
    })
}

exports.getAbout = (req, res) => {
    res.render('about', {
        pageTitle: '關於我們',
        path: '/about'
    })
}

exports.getServices = (req, res) => {
    res.render('services', {
        pageTitle: '我們的服務',
        path: '/services'
    })
}

exports.getProjects = (req, res) => {
    res.render('projects', {
        pageTitle: '我們的項目',
        path: '/projects'
    })
}

exports.getInvestors = (req, res) => {
    res.render('investors', {
        pageTitle: '投資者關係',
        path: '/investors'
    })
}

exports.getContact = (req, res) => {
    res.render('contact', {
        pageTitle: '聯絡我們',
        path: '/contact'
    })
}

exports.getDisclaimer = (req, res) => {
    res.render('disclaimer', {
        pageTitle: '免責聲明',
        path: '/disclaimer'
    })
}

exports.postMessage = (req, res) => {
    delete req.body._id
    mongoDB.mongoInsertOne(req.body)
    res.redirect('/')
}