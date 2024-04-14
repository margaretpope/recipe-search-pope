const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

 
router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("login", { error: req.query.error });
});

router.get("/signup", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});

router.get("/restaurants", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render ("restaurants", { isLoggedIn });
});

router.get("/recipes", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render ("recipes", { isLoggedIn });
});

//display restaurants
router.get("/displayRestaurants/:user_id", checkAuth, controllers.restaurants.display)

//API results
router.get("/searchRecipes", checkAuth, controllers.recipes.searchRecipes)

//update user
router.put('/user')



module.exports = router;
