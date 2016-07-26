var express = require('express');
var app = express();
var path = require('path')



app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'profile.html')); 
});
app.use(express.static(__dirname + 'public'));

app.listen(process.env.PORT, function(){
   console.log("App started") 
});