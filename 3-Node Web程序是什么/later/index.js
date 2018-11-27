const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const read = require('node-readability')
const url = 'http://www.manning.com/cantelon2/'
const Article = require('./db.js').Article
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    '/css/bootstrap.css',
    express.static('node_module/bootstrap/dist/css/bootstrap.css')
)

app.get('/articles', (req, res, next) => {  // 获取所有文字
    Article.all((err, articles) => {
        if (err) {
            return next(err)
        }
        // res.send(articles)
        res.format({
            html: () => {
                res.render('articles.ejs', { article })
            },
            json: () => {
                res.send(articles)
            }
        })
    })
})

app.post('/articles', (req, res, next) => {  // 创建一篇文章
    const url = req.body.url
    read(url, (err, result) => {
        if (err || !result) {
            res.status(500).send('Error downloading article')
        } else {
            Article.create({ title: result.title, content: result.content }, (err, article) => {
                if (err) {
                    return next(err)
                }
                res.send('OK')
            })
        }
    })
})



app.get('/articles/:id', (req, res, next) => { // 获取指定文章
    const id = req.params.id
    Article.find(id, (err, article) => {
        if (err) {
            return next(err)
        }
        res.send(article)
    })
})

app.delete('/articles/:id', (req, res, next) => { // 删除指定文章
    const id = req.params.id
    Article.delete(id, (err) => {
        if (err) {
            return next(err)
        }
        res.send({ message: 'Deleted' })
    })
})

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'))
})

module.exports = app;



