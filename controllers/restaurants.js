const { restaurants } = require('../models');

//add restaurant to user's favorites
async function newFavorite(req, res) {
  try {
    const user = req.session.userId
    const {restaurant_name, city, state, occassion} = req.body
    if (!(restaurant_name && city && state && occassion))
      return res.status(400).send('all fields required')
    await restaurants.inputRestaurant(restaurant_name, city, state, occassion)
  } catch(err) {
      res.status(500).send(err.message)
  }
  res.render('restaurants', {isLoggedIn, newFavorite})
};

//display restaurants
async function display(req, res) {
  try {
    const user = req.session.userId
    const isLoggedIn = req.session.isLoggedIn
    const displayRestaurants = await restaurants.displayFavorites(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
  res.render('restaurants', {isLoggedIn, displayRestaurants})
};


//update restaurants
async function update(req, res) {
  try {
    const user = req.session.userId
    const restaurant = req.params.id
    const {restaurant_name, city, state, occassion} = req.body
    if (!(restaurant_name && city && state && occassion))
      return res.status(400).send('all fields required')
    const updated = await restaurants.updateRestaurant(restaurant_name, city, state, occassion)
    if(updated){
      res.status(204).end()
    } else {res.status(404).send('failed to update')}
  } catch (err) {res.status(500).send('unable to update')}
  res.render("restaurants", {user, restaurant})
};

module.exports = {
  newFavorite,
  display,
  update
};