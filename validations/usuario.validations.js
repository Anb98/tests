const Joi = require('@hapi/joi');

module.exports = (req, res, next) =>{
	const {body} = req;

	const directionsSchema = Joi.object({
		description: Joi.string().required(),
		coord: Joi.object({
			lat: Joi.number().required(),
			lng: Joi.number().required(),
		}).required()
	}).required();

	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email(),
		last_name: Joi.string().allow(''),
		img: Joi.string().dataUri({paddingRequired:false}),
		password: Joi.string().min(6).max(12).required(),
		directions: Joi.array().items(directionsSchema),
	});

	const obj =  {
		email: '',
		name: '',
		last_name: '',
		img: '',
		password: '',
		directions:[{
			description: '',
			coord: {
				lat: '',
				lng: '',
			}
		}]
	}

	const result = schema.validate(body);

	if(result.error){
		return res.status(400).json(result.error);
	}

	next();
}