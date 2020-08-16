require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./config/general');
const usuarioRoutes = require('./routes/usuario.route');


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use('/usuario', usuarioRoutes);


app.listen(port, ()=>{
	console.log(`server running on http://localhost:${port}`);
});