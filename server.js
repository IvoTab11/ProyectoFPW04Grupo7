const express = require('express');

const app = express();

app.get('/',(req, res) => {


    res.sendFile(__dirname+'/public/index.html')
})

app.use('/src', express.static(__dirname + '/src'));
app.use('/node_modules', express.static(__dirname + '/node_modules' ));
app.use('/public', express.static(__dirname + '/public'));

app.listen(5003, function () {
    
    console.log("servidor NODE Grupo 7 Funcionando")
});