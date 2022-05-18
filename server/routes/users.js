const router = require("express").Router();
const { User, validate ,Details } = require("../models/user");
const bcrypt = require("bcrypt");

const auth = require('../middleware/auth');

 router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const pom=await new User({ ...req.body, password: hashPassword }).save();
 		await new Details({ 
			detailsCode:pom._id,
			comp:{
				
             }
			}).save();
		res.status(201).send({ message: "User created successfully"});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

});
router.get("/we/:userName",(req, res) => {
	try {
		User.findOne({ userName: req.params.userName })
	  .then(user => res.status(200).json({ user }))
	  .catch(error => res.status(404).json({ error }))
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
	
  });
  router.get("/det/:id", async (req, res) => {
	try {
 	   Details.findOne({detailsCode: req.params.id})
		.then(details => res.status(200).json(details))
 	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}});
router.put("/det/:id", async (req, res) => {
	try {
		 Details.updateOne({detailsCode: req.params.id},{ 
			comp:
				[...req.body]
             
			}).then(
			
 
		res.status(201).send({ message: "Details created successfully" }));
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
router.get("/friends/:userId", async (req, res) => {
	try {
	  const user = await User.findById(req.params.userId);
	  const friends = await Promise.all(
		user.followings.map((friendId) => {
		  return User.findById(friendId);
		})
	  );
	  let friendList = [];
	  friends.map((friend) => {
		const { _id, username, profilePicture } = friend;
		friendList.push({ _id, username, profilePicture });
	  });
	  res.status(200).json(friendList)
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  router.get("/friend", async (req, res) => {
	const userId = req.query.userId;
	const username = req.query.username;
	try {
	  const user = userId
		? await User.findById(userId)
		: await User.findOne({ userName: username });
	  const { password, updatedAt, ...other } = user._doc;
	  res.status(200).json(other);
	} catch (err) {
	  res.status(500).json(err);
	}
  });
module.exports = router;