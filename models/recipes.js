const db = require("../config/connection");
const axios = require('axios')

//API calls
async function searchRecipes(userSearch) {
    try {
      const results = null
      if(req.query.search) {
        const response = axios.get(`https://api.api-ninjas.com/v1/recipe?query=${userSearch}`)
        console.log(response.data)
        res.json(response.data)
        results = res.data
      }
      res.render("index", {isLoggedIn, results})
    } catch(err) {
      res.status(502).send('Recipe not available.')
    }
}

module.exports = { searchRecipes }


//delete recipe from favorites