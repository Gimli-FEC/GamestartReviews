DROP DATABASE IF EXISTS gamestart;

CREATE DATABASE gamestart;

USE gamestart;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name TINYTEXT,
    age TINYINT(4),
    avatar TINYTEXT,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    user_id INT,
    date DATE,
    title TINYTEXT,
    body TEXT,
    recommended BOOL,
    purchase_type BOOL,
    rating_overall TINYINT(5),
    rating_graphics TINYINT(5),
    rating_gameplay TINYINT(5),
    rating_appeal TINYINT(5),
    PRIMARY KEY (id),
    INDEX u_id (user_id),
    FOREIGN KEY (user_id)
        REFERENCES users(id)
);

/*    (sudo) mysql -u <USER> (-p) < database/schema.sql  */
