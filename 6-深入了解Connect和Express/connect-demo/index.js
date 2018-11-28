const app = require('connect')()
app.use(logger)
    .use(hello)

app.listen(3000)

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url)
    next()
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
}

function setup(format) {
    const regexp = /:(\w+)/g
    return function createLogger(req, res, next) {
        const str = format.replace(regexp, (match, property) => {
            return req[property]
        })
        console.log(str)
        next()
    }
}



const env = process.env.NODE_ENV || 'development'

function errorHandler(err, req, res, next) {
    res.statusCode = 500
    switch (env) {
        case 'development':
            console.error('Error:')
            console.error(err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(err))
            break
        default:
            res.end('Server error')
    }
}