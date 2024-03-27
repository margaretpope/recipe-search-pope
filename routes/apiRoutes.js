const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");
const axios = require("axios")

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);

//get data from recipe API
//where does API key go??
router.get('/recipe', async (req, res) => {
  try {
    const userSearch = form.search.value.trim()
    const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${userSearch}`)
    res.json(response.data)
  } catch(err) {
    res.status(502).send('Recipe not available.')
  }
})

//add subscriber to newsletter
router.post('/newsletter', async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body
        if (!(firstName && lastName && email))
            return res.status(400).send('all fields required')
        await db.query(`INSERT INTO newsletter (first_name, last_name, email) VALUES (?, ?, ?)`)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//add user input to restaurant list
router.post('/restaurants', async (req, res) => {
    try {
        const {restaurant, city, state, occassion} = req.body
        if (!(restaurant && city && state && occassion))
            return res.status(400).send('all fields required')
        await db.query(`INSERT INTO favorite_restaurants (restaurant_name, city, state, occassion) VALUE (?, ?, ?, ?)`)
    } catch(err) {
        res.status(500).send(err.message)
    }
})

//load user data on the "protected" page
router.get('/restaurants')

module.exports = router;
