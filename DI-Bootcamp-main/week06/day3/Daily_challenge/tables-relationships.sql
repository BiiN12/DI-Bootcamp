-- Active: 1761388857557@@127.0.0.1@5432@daily_challenge

-- Part I
CREATE Table Customers (
    CustomerID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL
);

create TABLE CustomerProfiles (
    ProfileID SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    CustomerID INT REFERENCES Customers (CustomerID)
);

INSERT INTO
    Customers (FirstName, LastName)
VALUES ('John', 'Doe'),
    ('Jane', 'Smith'),
    ('Alice', 'Johnson');

INSERT INTO
    CustomerProfiles (isLoggedIn, CustomerID)
VALUES (TRUE, 1),
    (FALSE, 2);

-- The first_name of the LoggedIn customers

SELECT firstName
from Customers
WHERE
    CustomerID IN (
        SELECT CustomerID
        FROM CustomerProfiles
        WHERE
            isLoggedIn = TRUE
    );
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

SELECT FirstName, isLoggedIn
FROM Customers
    LEFT JOIN CustomerProfiles ON Customers.CustomerID = CustomerProfiles.CustomerID;

-- The number of customers that are not LoggedIn
SELECT COUNT(*) AS NotLoggedInCount
FROM Customers
    LEFT JOIN CustomerProfiles ON Customers.CustomerID = CustomerProfiles.CustomerID
WHERE
    CustomerProfiles.isLoggedIn = FALSE
    OR CustomerProfiles.isLoggedIn IS NULL;

-- Part II
CREATE TABLE Books (
    BookID SERIAL PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(100) NOT NULL
);

INSERT INTO
    Books (Title, Author)
VALUES (
        'Alice In Wonderland',
        'Lewis Carroll'
    ),
    (
        'Harry Potter',
        'J.K. Rowling'
    ),
    (
        'To Kill a Mockingbird',
        'Harper Lee'
    );

CREATE Table Students (
    StudentID SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

INSERT INTO
    Students (name, age)
VALUES ('Patrick', 10),
    ('John', 12),
    ('Bob', 14),
    ('Lara', 11);

CREATE TABLE Library (
    book_fk_id INT REFERENCES Books (BookID) ON DELETE CASCADE ON UPDATE CASCADE,
    studentID INT REFERENCES Students (StudentID) ON DELETE CASCADE ON UPDATE CASCADE,
    borrow_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (book_fk_id, studentID)
);

INSERT INTO
    Library (
        book_fk_id,
        studentID,
        borrow_date
    )
VALUES (1, 1, '2023-10-01 10:00:00'),
    (2, 2, '2023-10-02 11:30:00'),
    (3, 3, '2023-10-03 09:15:00'),
    (1, 4, '2023-10-04 14:45:00');

-- Select all the columns from the junction table

SELECT * FROM Library;
-- Select the name of the student and the title of the borrowed books

SELECT Students.name, Books.Title
FROM Library
    JOIN Students ON Library.studentID = Students.StudentID
    JOIN Books ON Library.book_fk_id = Books.BookID;
-- Select the average age of the children, that borrowed the book Alice in Wonderland

SELECT AVG(Students.age) AS AverageAge
FROM Library
    JOIN Students ON Library.studentID = Students.StudentID
    JOIN Books ON Library.book_fk_id = Books.BookID
WHERE
    Books.Title = 'Alice In Wonderland';
-- Delete a student from the Student table, what happened in the junction table ?

DELETE FROM Students WHERE name = 'Bob';
-- The corresponding entry in the Library table is also deleted due to the ON DELETE CASCADE constraint.