const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
//
const authRoutes = require('./routes/authRoutes');
const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/', requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})