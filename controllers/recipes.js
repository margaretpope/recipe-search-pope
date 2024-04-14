const axios = require('axios')

//API calls
async function searchRecipes(userSearch) {
  try {
    response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${userSearch}`,
      {headers: {
        'X-Api-Key': process.env.API_KEY
      }})
    console.log(response.data)
    return (response.data)
  } catch(err) {
    console.error(err)
  }
  res.render("recipes", {isLoggedIn, response})
};

module.exports = { 
    searchRecipes,
  }