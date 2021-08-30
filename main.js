const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();


app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`port is on ${PORT}`));