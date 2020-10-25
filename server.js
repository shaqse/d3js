const express = require('express')
const app = express()

const port = 8000;

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
});
app.listen(port, null, () => {
    console.log(`Server running at http://localhost:${port}`);
});