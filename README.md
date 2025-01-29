# Click Fit

Welcome to **Click Fit**, your go-to sport and fitness website. This README will guide you through the setup and usage of the project.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Usage](#usage)

## Introduction
Click Fit is a responsive sport and fitness website designed with animations and interactive elements to enhance user experience. The main page includes an AJAX call to fetch interesting date facts and a drag-and-drop image upload feature.

## Features
- Responsive UI using Bootstrap
- Animations for a better user experience
- AJAX call to fetch date facts
- Drag-and-drop image upload
- Backend image upload handling with Node.js
- MySQL database integration

## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery
- Node.js
- MySQL
- Docker

## Setup Instructions

### Frontend
1. Clone the repository:
    ```sh
    git clone https://github.com/zinebMachrouh/clickfit.git
    ```
2. Navigate to the project directory:
    ```sh
    cd clickfit
    ```
3. Open `index.html` in your browser to view the main page.

### Backend
1. Ensure you have Node.js installed.
2. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```
4. Start the server:
    ```sh
    node app.js
    ```

### Database Setup
1. Ensure you have MySQL installed.
2. Run the following script to create the `users` table and the `addUser` stored procedure:

    ```sql
    CREATE TABLE users (
        ID INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
        password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
        type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
        active TINYINT DEFAULT 1,
        PRIMARY KEY (ID)
    );

    DELIMITER //
    CREATE PROCEDURE addUser(
        IN userEmail VARCHAR(255),
        IN userPassword VARCHAR(255),
        IN userType VARCHAR(255)
    )
    BEGIN
        INSERT INTO users (email, password, type, active) VALUES (userEmail, userPassword, userType, 1);
    END //
    DELIMITER ;
    ```


## Usage
- Open the main page in your browser to see the responsive design and animations.
- Use the drag-and-drop area to upload images.
- The backend server will handle image uploads and store them in the `upload_images` folder.

Enjoy using Click Fit!
