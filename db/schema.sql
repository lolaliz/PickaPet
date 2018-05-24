DROP DATABASE IF EXISTS pick_a_pet;
CREATE DATABASE pick_a_pet;

USE pick_a_pet;
  
DROP TABLE IF EXISTS dogs_table;
CREATE TABLE dogs_table (
    id INTEGER AUTO_INCREMENT NOT NULL, 
    breed VARCHAR(100),
    height INTEGER(10), 
    weight INTEGER(10), 
    size VARCHAR(30), 
    child_friendly VARCHAR(30), 
    energy_level INTEGER(30),
    PRIMARY KEY (id)
);

    