-- exo xp


--     r.rental_id,
--     f.title AS film_title,
--     c.first_name || ' ' || c.last_name AS customer_name,
--     r.rental_date
-- FROM rental r
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE r.return_date IS NULL
-- ORDER BY r.rental_date DESC;


-- SELECT 
--     c.customer_id,
--     c.first_name,
--     c.last_name,
--     COUNT(r.rental_id) AS unreturned_rentals
-- FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- WHERE r.return_date IS NULL
-- GROUP BY c.customer_id, c.first_name, c.last_name
-- ORDER BY unreturned_rentals DESC;

-- SELECT f.title
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- JOIN film_category fc ON f.film_id = fc.film_id
-- JOIN category c ON fc.category_id = c.category_id
-- WHERE a.first_name = 'Joe' AND a.last_name = 'Swank'
--   AND c.name = 'Action';


-- exo2 


-- SELECT s.store_id, ci.city, co.country
-- FROM store s
-- JOIN address a ON s.address_id = a.address_id
-- JOIN city ci ON a.city_id = ci.city_id
-- JOIN country co ON ci.country_id = co.country_id;


-- SELECT s.store_id, SUM(f.length) AS total_minutes
-- FROM store s
-- JOIN inventory i ON s.store_id = i.store_id
-- JOIN film f ON i.film_id = f.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- WHERE r.return_date IS NOT NULL
-- GROUP BY s.store_id;


-- SELECT DISTINCT cu.customer_id, cu.first_name, cu.last_name, ci.city
-- FROM customer cu
-- JOIN address a ON cu.address_id = a.address_id
-- JOIN city ci ON a.city_id = ci.city_id
-- WHERE ci.city_id IN (
--     SELECT a.city_id
--     FROM store s
--     JOIN address a ON s.address_id = a.address_id
-- );


-- SELECT DISTINCT cu.customer_id, cu.first_name, cu.last_name, co.country
-- FROM customer cu
-- JOIN address a ON cu.address_id = a.address_id
-- JOIN city ci ON a.city_id = ci.city_id
-- JOIN country co ON ci.country_id = co.country_id
-- WHERE co.country_id IN (
--     SELECT co.country_id
--     FROM store s
--     JOIN address a ON s.address_id = a.address_id
--     JOIN city ci ON a.city_id = ci.city_id
--     JOIN country co ON ci.country_id = co.country_id
-- );


-- SELECT f.title, f.description, f.length
-- FROM film f
-- WHERE f.film_id NOT IN (
--     SELECT fc.film_id
--     FROM film_category fc
--     JOIN category c ON fc.category_id = c.category_id
--     WHERE c.name = 'Horror'
-- )
-- AND LOWER(f.title || ' ' || f.description) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%';

