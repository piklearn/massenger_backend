const express = require('express');
const app = express();
const morgan = require('morgan');
const Router = require('./src/routes');
const mongoos = require('mongoose')
const cors = require('cors')
const port = 3001;
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT','POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth-token");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }});
const corsOptions = {
  origin: 'http://localhost:3000', // جایگزین با دامنه‌های مجاز خود
  credentials: true, // این گزینه باید برای ارسال کوکی‌ها فعال باشد
};
app.use(cors(corsOptions));
  
  
mongoos.connect('mongodb://127.0.0.1:27017/massanger')
.then(()=> console.log('connected To database'))
.catch(()=>console.log("not Connected To database"));
app.use(morgan('tiny'));
app.use('/api',Router);

app.listen(port, () => console.log(`app listening on port ${port}!`));