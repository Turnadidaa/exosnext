



-- exo cours 
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Meryl', 'Streep', '1949-06-22', 3);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Natalie', 'Portman', '1981-06-09', 1);

-- -- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
--     ('Leonardo', 'DiCaprio', '1974-11-11', 1),
--     ('Denzel', 'Washington', '1954-12-28', 2),
--     ('Brad', 'Pitt', '1963-12-18', 2);

-- SELECT * FROM actors LIMIT 4;
-- question 2 :
-- SELECT * FROM actors
-- ORDER BY last_name ASC
-- LIMIT 4;
-- SELECT * FROM actors WHERE first_name LIKE '%e%';
-- SELECT * FROM actors where number_oscars >=5;
-- SELECT COUNT(*) FROM actors;

-- When trying to insert an actor with blank fields, the operation will fail if the columns have a NOT NULL constraint, as they require non-empty values to ensure data integrity.
