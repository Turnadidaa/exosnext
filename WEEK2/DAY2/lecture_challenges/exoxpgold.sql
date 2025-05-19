-- exo 1 

-- -- 1. Nombre de films par rating
-- SELECT rating, COUNT(*) AS film_count
-- FROM film
-- GROUP BY rating;

-- -- 2. Liste des films avec rating G ou PG-13
-- SELECT title, rating
-- FROM film
-- WHERE rating IN ('G', 'PG-13');

-- -- 3. Films G ou PG-13 de moins de 2h et rental_rate < 3.00, triés par titre
-- SELECT title, rating, length, rental_rate
-- FROM film
-- WHERE rating IN ('G', 'PG-13')
--   AND length < 120
--   AND rental_rate < 3.00
-- ORDER BY title ASC;

-- -- 4. Mise à jour d’un client avec vos informations personnelles (ici ID = 1)
-- UPDATE customer
-- SET first_name = 'Nada',
--     last_name = 'Mouni',
--     email = 'nada.mouni@example.com'
-- WHERE customer_id = 1;

-- -- 5. Mise à jour de l’adresse liée à ce client (remplacez 5 si besoin)
-- -- Pour trouver l'address_id, exécutez d’abord :
-- -- SELECT address_id FROM customer WHERE customer_id = 1;

-- UPDATE address
-- SET address = '123 Rue des Jasmins',
--     address2 = 'Apt 7',
--     district = 'Casablanca',
--     postal_code = '20000',
--     phone = '0600123456'
-- WHERE address_id = 5;

-- exo2 
-- -- 1. UPDATE : Lea et Marc Benichou doivent avoir la même date de naissance
-- UPDATE students
-- SET birth_date = '1998-11-02'
-- WHERE (first_name = 'Lea' AND last_name = 'Benichou')
--    OR (first_name = 'Marc' AND last_name = 'Benichou');

-- -- 2. UPDATE : Corriger le nom de famille de David Grez -> Guez
-- UPDATE students
-- SET last_name = 'Guez'
-- WHERE first_name = 'David' AND last_name = 'Grez';

-- -- 3. DELETE : Supprimer Lea Benichou
-- DELETE FROM students
-- WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- -- 4. COUNT : Nombre total d’étudiants
-- SELECT COUNT(*) AS total_students
-- FROM students;

-- -- 5. COUNT : Nombre d’étudiants nés après le 1er janvier 2000
-- SELECT COUNT(*) AS born_after_2000
-- FROM students
-- WHERE birth_date > '2000-01-01';

-- -- 6. ALTER : Ajouter une colonne math_grade
-- ALTER TABLE students
-- ADD COLUMN math_grade INTEGER;

-- -- 7. INSERT DES NOTES
-- -- a. Note 80 pour l'étudiant avec id = 1
-- UPDATE students
-- SET math_grade = 80
-- WHERE id = 1;

-- -- b. Note 90 pour les étudiants avec id = 2 ou 4
-- UPDATE students
-- SET math_grade = 90
-- WHERE id IN (2, 4);

-- -- c. Note 40 pour l'étudiant avec id = 6
-- UPDATE students
-- SET math_grade = 40
-- WHERE id = 6;

-- -- 8. COUNT : Étudiants avec une note > 83
-- SELECT COUNT(*) AS high_math_scores
-- FROM students
-- WHERE math_grade > 83;

-- -- 9. INSERT : Ajouter un nouvel étudiant Omer Simpson
-- -- Supposons que l'on prend une birth_date déjà existante (par ex. celle de l'étudiant avec id = 1)
-- INSERT INTO students (first_name, last_name, birth_date, math_grade)
-- SELECT 'Omer', 'Simpson', birth_date, 70
-- FROM students
-- WHERE id = 1
-- LIMIT 1;

-- -- 10. BONUS : Compter combien de notes chaque étudiant a
-- -- On suppose ici que les doublons sont dans la table students elle-même
-- SELECT first_name, last_name, COUNT(math_grade) AS total_grade
-- FROM students
-- GROUP BY first_name, last_name;

-- -- 11. SUM : Somme de toutes les notes
-- SELECT SUM(math_grade) AS total_math_score
-- FROM students;

-- exo3

-- -- 1. Création de la table purchases
-- CREATE TABLE purchases (
--     id SERIAL PRIMARY KEY,
--     customer_id INTEGER REFERENCES customers(id),
--     item_id INTEGER REFERENCES items(id),
--     quantity_purchased INTEGER
-- );

-- -- 2. Insertion : Scott Scott a acheté un ventilateur (fan)
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
--     (SELECT id FROM items WHERE name = 'fan'),
--     1
-- );

-- -- 3. Insertion : Melanie Johnson a acheté 10 grands bureaux (large desk)
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
--     (SELECT id FROM items WHERE name = 'large desk'),
--     10
-- );

-- -- 4. Insertion : Greg Jones a acheté 2 petits bureaux (small desk)
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
--     (SELECT id FROM items WHERE name = 'small desk'),
--     2
-- );


-- -- 5. Toutes les lignes de la table purchases
-- SELECT * FROM purchases;

-- -- 6. Toutes les achats avec les infos client
-- SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases p
-- JOIN customers c ON p.customer_id = c.id;

-- -- 7. Achats du client avec id = 5
-- SELECT * FROM purchases
-- WHERE customer_id = 5;

-- -- 8. Achats pour un large desk ET un small desk
-- SELECT * FROM purchases
-- WHERE item_id IN (
--     SELECT id FROM items WHERE name IN ('large desk', 'small desk')
-- );

-- -- 9. Afficher les clients ayant effectué un achat, avec l’item acheté
-- SELECT c.first_name, c.last_name, i.name AS item_name
-- FROM purchases p
-- JOIN customers c ON p.customer_id = c.id
-- JOIN items i ON p.item_id = i.id;

-- -- 10. Ajouter une ligne avec customer_id mais sans item_id (NULL)
-- -- Est-ce que cela fonctionne ? Cela dépend si item_id autorise NULL

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (1, NULL, 1);
