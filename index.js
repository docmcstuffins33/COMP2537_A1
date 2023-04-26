const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    var html = `<h1>Welcome to the Archive</h1>
        <form action='/members' method='redirect'>
            <button>Members</button>
        </form>
        `
    res.send(html)
});

app.get('/members', (req,res) => {
    res.send("<img src='/most_wanted.png' style='width:250px;'>");
});

app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
    res.status(404);
    res.send("Page not found - 404");
})

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 