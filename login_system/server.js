const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3001;
require("C:\\Users\\Admin\\OneDrive\\Desktop\\login\\db\\mongo.js");
var productRouter = require("C:\\Users\\Admin\\OneDrive\\Desktop\\login\\route\\crud.js");
app.use(cors())
app.use(express.json());
app.use(productRouter);

// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("server is running");
})

// home route

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.get('/', (req, res) => {
    res.render('base', {title:"Login System"});
})

app.listen(port, () => {console.log(`Server started on port ${port}`)});