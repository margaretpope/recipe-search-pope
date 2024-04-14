const { restaurants } = require('../models');

//add restaurant to user's favorites
async function newFavorite(req, res) {
  try {
    const {restaurant_name, city, state, occassion} = req.body
    if (!(restaurant_name && city && state && occassion))
      return res.status(400).send('all fields required')
    await restaurants.inputRestaurant(restaurant_name, city, state, occassion)
  } catch(err) {
      res.status(500).send(err.message)
  }
  res.render('restaurants', {newFavorite})
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
    const updated = await restaurants.updateRestaurant(restaurant_name, city, state, occassion)
    if(updated){
      res.status(204).end()
    } else {res.status(404).send('failed to update')}
  } catch (err) {res.status(500).send('unable to update')}
  res.render("restaurants", {user, restaurant})
};

//delete restaurant
async function deleteExisting(req,res) {
  try {
    const restaurant = req.params.id
    const {restaurant_name, city, state, occassion} = req.body
    const deleted = await restaurants.deleteRestaurant(restaurant_name, city, state, occassion)
    if(updated){
      res.status(204).end()
    } else {res.status(404).send('failed to delete')}
  } catch (err) {res.status(500).send('unable to delete')}
};

module.exports = {
  newFavorite,
  display,
  update,
  deleteExisting
};