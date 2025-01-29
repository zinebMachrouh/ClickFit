CREATE DATABASE IF NOT EXISTS click_fit;

USE click_fit;

CREATE TABLE IF NOT EXISTS users (
  ID INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  active TINYINT DEFAULT 1,
  PRIMARY KEY (ID)
);

DELIMITER //

CREATE PROCEDURE addUser(IN userEmail VARCHAR(255), userPassword VARCHAR(255), userType VARCHAR(255), userActive TINYINT)
BEGIN
  INSERT INTO users (email, password, type, active) VALUES (userEmail, userPassword, userType, userActive);
END //

DELIMITER ;
