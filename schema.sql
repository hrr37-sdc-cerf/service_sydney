DROP DATABASE opentable;
CREATE DATABASE opentable;

USE opentable;

CREATE TABLE restaurants (
  id int NOT NULL,
  name VARCHAR(50),
  description VARCHAR(500),
  rating VARCHAR(4),
  reviews int,
  max_price int,
  food_type VARCHAR(25),
  tag1 VARCHAR(25),
  tag2 VARCHAR(25),
  tag3 VARCHAR(25)
);

CREATE TABLE photos (
  photo_id int NOT NULL,
  photo1 VARCHAR(100),
  photo2 VARCHAR(100),
  photo3 VARCHAR(100),
  photo4 VARCHAR(100),
  photo5 VARCHAR(100),
  photo6 VARCHAR(100),
  photo7 VARCHAR(100),
  photo8 VARCHAR(100),
  photo9 VARCHAR(100),
  photo10 VARCHAR(100)
);