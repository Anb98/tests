const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./config/general');

const UsuarioCtrl = require('./controllers/usuario.ctrl');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/usuario', UsuarioCtrl.index);
app.get('/usuario/:id', UsuarioCtrl.show);
app.post('/usuario', UsuarioCtrl.create);

// app.put('/comentarios', (req, res, next)=>{
// 	if(isAuth()){
// 		next();
// 	}
// 	else{
// 		res.status(401).json({message: 'unauthorized'});
// 	}
// }, 
// (req, res)=>{

// });


app.listen(port, ()=>{
	console.log(`server running on http://localhost:${port}`);
});