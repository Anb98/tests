module.exports = {
	index(req, res){
		// retorna todoooo

		return res.status(200).json({ data: []});
	},

	show(req, res){
		// retorna un usuario

		return res.status(200).json({ data: {id: req.params.id, query: req.query}});
	},

	store(req, res){
		// retorna un usuario

		return res.status(201).json({ message: 'creado correctamente'});
	},

	update(){

	},

	destroy(){

	}
}