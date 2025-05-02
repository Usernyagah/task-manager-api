-- Create the database
CREATE DATABASE IF NOT EXISTS library;
USE library;

-- Members table
CREATE TABLE Members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    registration_date DATE NOT NULL
);

-- Books table
CREATE TABLE Books (
    isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publication_year YEAR,
    genre VARCHAR(50),
    total_copies INT DEFAULT 1,
    available_copies INT DEFAULT 1,
    CHECK (available_copies >= 0)
);

-- Loans table
CREATE TABLE Loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    loan_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (isbn) REFERENCES Books(isbn)
);

-- Sample data
INSERT INTO Members (name, email, phone, registration_date) VALUES
('Alice Johnson', 'alice@example.com', '555-1234', '2023-01-15'),
('Bob Smith', 'bob@example.com', '555-5678', '2023-02-20');

INSERT INTO Books (isbn, title, publication_year, genre, total_copies, available_copies) VALUES
('9780451524935', '1984', 1949, 'Dystopian', 5, 5),
('9780061120084', 'To Kill a Mockingbird', 1960, 'Fiction', 3, 3);

INSERT INTO Loans (member_id, isbn, loan_date, due_date, return_date) VALUES
(1, '9780451524935', '2023-10-01', '2023-10-15', NULL),
(2, '9780061120084', '2023-10-05', '2023-10-19', '2023-10-18');

