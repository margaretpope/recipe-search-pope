USE mysql_project_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

  -- save user's favorite recipes from API here??
CREATE TABLE favorite_recipes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  recipe_name VARCHAR(100) NOT NULL,
  servings VARCHAR (100) NOT NULL,
  ingredients VARCHAR(5000) NOT NULL,
  instructions VARCHAR(5000) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users (id)
);

-- user input the restaurants they've visited
CREATE TABLE favorite_restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_name VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  occasion VARCHAR (200) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users (id)
);


