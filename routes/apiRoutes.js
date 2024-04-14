const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");
const axios = require("axios")

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);

//post form input to database
router.post("/restaurants", controllers.restaurants.newFavorite);

//load user data on the "protected" page
router.get('/restaurants');

router.get('/recipes');

module.exports = router;
