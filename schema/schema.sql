USE mysql_project_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE favorite_recipes (
  -- save user's favorite recipes from API here??
  recipe_name VARCHAR(100) NOT NULL,
  ingredients VARCHAR(5000) NOT NULL,
  instructions VARCHAR(5000) NOT NULL
  FOREIGN KEY (user_id)
    REFERENCE users (id)
);

-- sign up to receive a newlsletter of new restaurants and recipes
CREATE TABLE newsletter (
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email_address VARCHAR(50) NOT NULL
);

-- user input the restaurants they've visited
CREATE TABLE favorite_restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_name VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  occasion VARCHAR (200) NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users (id)
);


