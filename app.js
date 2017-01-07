var express = require('express'),
app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
var server = app.listen(PORT, function(){
  console.log("Listening in port " + PORT);
})