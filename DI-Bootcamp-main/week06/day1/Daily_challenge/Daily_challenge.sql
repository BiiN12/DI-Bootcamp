-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL, 
-- last_name VARCHAR(100) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- )

-- SELECT * FROM actors

-- ADD DATA INTO THE TABLE

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2),
-- ('Anne', 'Tomas', '04/01/1993', 4),
-- ('Mike', 'James', '09/07/1982', 2), ('James', 'Matt', '06/02/1990', 1), ('John', 'Kelly', '18/07/1973', 3);


-- SELECT * FROM actors
-- SELECT COUNT(*) FROM actors

INSERT INTO actors (first_name,last_name,age,number_oscars)
VALUES('Jeorge', 'Miles', '09/11/2000') -- ERROR:  INSERT has more target columns than expressions



