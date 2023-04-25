const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/members', (req,res) => {
    res.send("<img src='/most_wanted.png' style='width:250px;'>");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 