const router = require("express").Router();
const userRoutes = require("./user");


//volunteer routes
router.use("/users", userRoutes);

module.exports = router;