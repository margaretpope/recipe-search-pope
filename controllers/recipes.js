const axios = require('axios')

//API calls
async function searchRecipes(userSearch) {
    try {
      const results = null
      if (req.query.search) {
        axios.get(`https://api.api-ninjas.com/v1/recipe?query=${userSearch}`)
        console.log(res.data)
        res.json(res.data)
        results = res.data}
    } catch(err) {
      res.status(502).send('Recipe not available.')
    }
    res.render("index", {isLoggedIn, results})
};

module.exports = { 
    searchRecipes,
  }