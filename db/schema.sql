DROP DATABASE IF EXISTS pick_a_pet;
CREATE DATABASE pick_a_pet;
  
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

load data local infile 'C:/Users/Andres/Downloads/dogs_breeds_seed.csv' into table dogs_table fields terminated by ',' 
lines terminated by '\r\n' (breed, height, weight, size, child_friendly, energy_level);

--select the file path in which you have your csv file.

    