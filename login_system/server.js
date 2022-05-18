const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.get('/', (req, res) => {
    res.render('base', {title:"Login System"});
})

app.listen(port, () => {console.log(`Server started on port ${port}`)});