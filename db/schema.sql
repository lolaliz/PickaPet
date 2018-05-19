DROP DATABASE IF EXISTS pick_a_pet;
CREATE DATABASE pick_a_pet;

CREATE TABLE akc_breed_info (
    id INTEGER AUTO_INCREMENT NOT NULL, 
    breed VARCHAR(100),
    height_high_inches INTEGER(10), 
    weight_low_lbs INTEGER(10), 
    size_class VARCHAR(30), 
    child_friendly VARCHAR(30),
    energy_level VARCHAR(30),
    PRIMARY KEY (id)
);