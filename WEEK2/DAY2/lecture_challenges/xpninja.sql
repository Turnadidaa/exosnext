
-- -- BONUS EXERCISE 1: Public Database

-- -- 1. Last 2 customers alphabetically (A-Z), excluding ID
-- SELECT first_name, last_name
-- FROM customers
-- ORDER BY last_name, first_name
-- OFFSET (SELECT COUNT(*) - 2 FROM customers);

-- -- 2. Delete all purchases made by Scott
-- DELETE FROM purchases
-- WHERE customer_id = (
--     SELECT id FROM customers
--     WHERE first_name = 'Scott' AND last_name = 'Scott'
-- );

-- -- 3. Check if Scott still exists in the customers table
-- SELECT * FROM customers
-- WHERE first_name = 'Scott' AND last_name = 'Scott';

-- -- 4. Find all purchases (Scott’s order should appear as blanks if customer is deleted)
-- SELECT p.id AS purchase_id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases p
-- LEFT JOIN customers c ON p.customer_id = c.id;

-- -- 5. Find all purchases (Scott’s order will NOT appear if customer is deleted)
-- SELECT p.id AS purchase_id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases p
-- INNER JOIN customers c ON p.customer_id = c.id;
