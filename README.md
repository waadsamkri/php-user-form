# Simple User Form with PHP & MySQL

A basic web application that allows users to submit their name and age through a one-line form. The data is stored in a MySQL database and displayed in a table. Each record includes a toggle button to switch its status between 0 and 1, with real-time updates.

## Features

- One-line form with Name and Age inputs
- Submit button to add data into MySQL database
- Display all user records in a formatted table
- Toggle button to update status (0 ↔ 1)
- Real-time updates using JavaScript (AJAX)

## Technologies Used

- HTML
- CSS
- JavaScript (Fetch API)
- PHP
- MySQL
- XAMPP (for local development)

## Getting Started

### 1. Requirements

- XAMPP (Apache + MySQL)
- A web browser
- Text editor (VS Code, Sublime, etc.)

### 2. Setup Steps

#### Step 1: Move Files
"C:\xampp\htdocs\form-project":

#### Step 2: Start XAMPP
Open XAMPP Control Panel and start:
- Apache
- MySQL

#### Step 3: Create the Database
1. Open `http://localhost/phpmyadmin`
2. Create a new database named `myform`
3. Run this SQL command to create the table:
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    status TINYINT(1) DEFAULT 0
);

