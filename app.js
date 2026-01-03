const express = require('express'); 
const app = express();
const port = 3000;  

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); 

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/public/main.html');
}); 

app.listen(port, ()=> {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
