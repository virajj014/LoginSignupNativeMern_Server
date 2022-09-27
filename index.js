const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
//
const authRoutes = require('./routes/authRoutes');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/', (req, res) => {
    res.send('This is home page');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})