const express = require('express')
const path = require('path')
const hbs = require('hbs')
const posts = require('./utils/posts')

const app = express()
app.set('env', 'development');


// Template Settings
app.set('view engine', 'hbs')
// const viewsPath = path.join(__dirname,'../templates')
const partialsPath = path.join(__dirname, '../views/partials')
// app.set('views', viewsPath) // set custom views path
hbs.registerPartials(partialsPath);

// Public Directory setting
const PUBLIC_PATH = path.join(__dirname, '../public')
app.use(express.static(PUBLIC_PATH))
//app.use(express.static('public'))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Hello from hbs'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/posts', (req, res) => {
    if (!req.query.list) {
        return res.send({
            'error': 'list parameter is required'
        })
    }
    posts.list((data, error) => {
        // console.log(data);
        let posts = data;
        res.render('posts', {
            posts,
            error
        })
    });
})

app.listen(3000, () =>
    console.log('listning port 3000')
) 