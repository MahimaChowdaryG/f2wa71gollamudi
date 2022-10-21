var express = require('express');
var router = express.Router();
var random=Math.floor(Math.random()*10);
var value=Math.log(`${random}`);

/* GET users listing. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    var x= search_params.get("x")
    if(x!=null)
    {
      var value1=Math.log(`${x}`);
      res.send(`Math.log() applied to ${x} is ${value1}`);
    }
    else 
    {
      res.send(`Math.log() applied to ${random} is ${value}`);
    }


});

module.exports = router;

