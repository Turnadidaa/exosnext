
-- SELECT * FROM customer;

-- SELECT first_name || ' ' || last_name AS full_name
-- FROM customer;

-- SELECT DISTINCT create_date
-- FROM customer;

-- SELECT *
-- FROM customer
-- ORDER BY first_name DESC;

-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;

-- SELECT a.address, a.phone
-- FROM address a
-- JOIN customer c ON a.address_id = c.address_id
-- WHERE a.district = 'Texas';

-- SELECT *
-- FROM film
-- WHERE film_id IN (15, 150);
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Nom de ton film préféré';
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'Da%';
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10;

-- SELECT 
--     c.customer_id,
--     c.first_name, 
--     c.last_name, 
--     p.amount, 
--     p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id ASC;

-- SELECT f.film_id, f.title
-- FROM film f 
-- LEFT JOIN inventory i ON f.film_id = i.film_id
-- WHERE i.inventory_id IS NULL;
-- SELECT c.city, co.country
-- FROM city c
-- JOIN country co ON c.country_id = co.country_id;

-- SELECT cu.customer_id, cu.first_name, cu.last_name, p.amount, p.payment_date, s.staff_id
-- FROM customer cu
-- JOIN payment p ON cu.customer_id = p.customer_id
-- JOIN staff s ON p.staff_id = s.staff_id
-- ORDER BY s.staff_id;
