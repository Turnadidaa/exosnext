-- SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

-- 2 :

-- SELECT 
--     film.title,
--     film.description,
--     language.name AS language_name
-- FROM 
--     film
-- JOIN 
--     language ON film.language_id = language.language_id;
-- 3 :

-- SELECT 
--     film.title,
--     film.description,
--     language.name AS language_name
-- FROM 
--     language
-- LEFT JOIN 
--     film ON language.language_id = film.language_id;


-- //// check how many films exist per language, including languages that have no films////

-- SELECT 
--     language.name AS language_name,
--     COUNT(film.film_id) AS film_count
-- FROM 
--     language
-- LEFT JOIN 
--     film ON language.language_id = film.language_id
-- GROUP BY 
--     language.name
-- ORDER BY 
--     film_count DESC;

-- 4:

-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255)
-- );

-- INSERT INTO new_film (name) VALUES 
-- ('The Last Horizon'),
-- ('Echoes of Tomorrow'),
-- ('Shadow of the Moon'),
-- ('Beyond the Edge'),
-- ('Whispers in the Wind');

-- CREATE TABLE customer_review (
--     id SERIAL PRIMARY KEY,
--     film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
--     customer_name VARCHAR(100),
--     rating INTEGER CHECK (rating >= 1 AND rating <= 5),
--     review_text TEXT,
--     review_date DATE DEFAULT CURRENT_DATE
-- );

-- 6

-- INSERT INTO customer_review (film_id, customer_name, rating, review_text)
-- VALUES 
-- (1, 'Nada MOUNI', 5, 'I did enjoy the film '),
-- (2, 'sponge bob', 4, 'A film with great visuals.');

-- SELECT 
--     cr.id,
--     f.title AS film_title,
--     cr.customer_name,
--     cr.rating,
--     cr.review_text,
--     cr.review_date
-- FROM 
--     customer_review cr
-- JOIN 
--     film f ON cr.film_id = f.film_id;
-- INSERT INTO customer_review (film_id, customer_name, rating, review_text)
-- VALUES 
-- (3, 'malak korayma', 3, 'A slow start, but picked up well.'),
-- (4, 'abdel lagrid', 5, 'An excellent sci-fi experience!');

-- SELECT 
--     cr.id,
--     nf.name AS film_title,
--     cr.customer_name,
--     cr.rating,
--     cr.review_text,
--     cr.review_date
-- FROM 
--     customer_review cr
-- JOIN 
--     new_film nf ON cr.film_id = nf.id
-- ORDER BY 
--     cr.id;
-- DELETE FROM new_film WHERE id = 3;

-- select * from customer_review 

-- /// since we used ON DELETE CASCADE even the review was deleted 



-- EXO 2 :

-- Change the language of a specific film

-- UPDATE film
-- SET language_id = (
-- SELECT language_id FROM language WHERE name = 'French'
-- )
-- WHERE title = 'Academy Dinosaur';

-- 2 //


-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE IF EXISTS customer_review;
-- This is a relatively easy step. The main consideration is whether other database objects (like views, other tables with foreign keys referencing customer_review, or stored procedures) depend on the 'customer_review' table. If there are such dependencies, dropping the table would break those objects.
-- The 'DROP TABLE IF EXISTS' command is used to avoid errors if the table doesn't happen to exist.

-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- select
-- f.title,
--     f.rental_rate
-- FROM
--     film f
-- JOIN
--     inventory i ON f.film_id = i.film_id
-- JOIN
--     rental r ON i.inventory_id = r.inventory_id
-- WHERE
--     r.return_date IS NULL
-- ORDER BY
--     f.rental_rate DESC
-- LIMIT 30;


-- SELECT f.title
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
--   AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');

-- SELECT title, description, length, rating
-- FROM film
-- WHERE length < 60
--   AND rating = 'R'
--   AND (description ILIKE '%documentary%' OR title ILIKE '%documentary%');

-- SELECT DISTINCT f.title, p.amount, r.return_date
-- FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN payment p ON c.customer_id = p.customer_id AND p.rental_id = r.rental_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
--   AND c.last_name = 'Mahan'
--   AND p.amount > 4.00
--   AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- SELECT DISTINCT f.title, f.replacement_cost, f.description
-- FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
--   AND c.last_name = 'Mahan'
--   AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
-- ORDER BY f.replacement_cost DESC
-- LIMIT 1;
