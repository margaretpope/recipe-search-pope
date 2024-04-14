const db = require("../config/connection");

//add restaurants to favorites
async function inputRestaurant(restaurant_name, city, state, occassion) {
    await db.query(
        `INSERT INTO favorite_restaurants (restaurant_name, city, state, occassion)
        VALUES (?, ?, ?, ?) WHERE user_id = ?`,
        [restaurant_name, city, state, occassion]
    )
}

//display restaurants
async function displayFavorites(user_id) {
    const [restaurants] = await db.query(
        `SELECT * FROM favorite_restaurants WHERE user_id = ?`,
        [user_id]
    )
}

//update existing restaurant
async function updateRestaurant(id) {
    const[{affectedRows}] = db.query(
    `UPDATE favorite_restaurants SET ? WHERE id = ?`,
    [id])
}

module.exports = {
    inputRestaurant,
    displayFavorites,
    updateRestaurant
};