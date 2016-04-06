var http =  require ('http');
var events = require('events');
var Likes = require ('./likes');


var like = new Likes();
like.on("likesbalanceChanged", like.displayBalance);
like.on("likesbalanceChanged", like.checkMinimum);
like.on("likesbalanceChanged", function () {
    like.checkMinimum(this, 0);
});

like.increase(20);
like.increase(20);
like.increase(100);
like.decrease(40);

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(like.getLog());
    res.end();
}).listen(8000);
console.log('Listening on port 8080');