const db = require("../config/connection");

//add restaurants to favorites
async function inputRestaurant(restaurant_name, city, state, occassion) {
    await db.query(
        `INSERT INTO favorite_restaurants (restaurant_name, city, state, occassion)
        VALUES (?, ?, ?, ?) WHERE user_id = ?`,
        [{restaurant_name, city, state, occassion}, req.params.user_id]
    )
};

//display restaurants
async function displayFavorites(restaurant_name, city, state, occassion) {
    const [restaurants] = await db.query(
        `SELECT * FROM favorite_restaurants WHERE user_id = ?`,
        [{restaurant_name, city, state, occassion}, req.params.user_id]
    )
};

//update existing restaurant
async function updateRestaurant(restaurant_name, city, state, occassion) {
    const[{affectedRows}] = db.query(
        `UPDATE favorite_restaurants SET ? WHERE id = ?`,
        [{restaurant_name, city, state, occassion}, req.params.id])
    if (affectedRows === 0) return res.status(404).send('unable to update')
    res.status(201).send('restaurant updated')
};

//delete restaurant from favorites
async function deleteRestaurant(restaurant_name, city, state, occassion) {
    const [{affectedRows}] = await db.query(
      `DELETE FROM favorite_restaurant WHERE id = ?`, 
      [{restaurant_name, city, state, occassion}, req.params.id]
    )
    if (affectedRows === 0) return res.status(404).send('unable to delete restaurant')
    res.status(201).send('deleted restaurant')
  };

module.exports = {
    inputRestaurant,
    displayFavorites,
    updateRestaurant,
    deleteRestaurant
};