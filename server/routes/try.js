const router = require("express").Router();

router.post("/pred", async (req, res) => {
	try {
    } catch (error) {
		res.status(500).send({ message: "Login Failed , Try again" });
	}
});

module.exports = router;