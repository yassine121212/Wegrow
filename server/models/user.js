const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { string } = require("joi");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	userName: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	Address: { type: String, required: true },
	pays:{type: String, required: true},
	date: { type: Date, default:Date.now() },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};
userSchema.methods.refreshAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

 

const User = mongoose.model("user", userSchema);
const detailsUserSchema = new mongoose.Schema({
	type: mongoose.Schema.Types.ObjectId,

 	 detailsCode: { type: String, required: true },
	 details:{
		 type:mongoose.Schema.Types.ObjectId,
		 ref:'user'
	 },
	 comp:[]
});
const Details = mongoose.model("details", detailsUserSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		userName: Joi.string().required().label("User Name"),
		email: Joi.string().email().required().label("Email"),
		phone: Joi.string().required().label("Phone"),
		Address: Joi.string().required().label("Address"),
		pays: Joi.string().required().label("Pays"),
		date: Joi.string().label("date"),

		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate,Details };