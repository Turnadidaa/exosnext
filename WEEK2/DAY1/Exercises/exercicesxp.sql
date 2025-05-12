-- exo 1
-- -- 
-- CREATE TABLE customers(
--  customers_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- ) ;

-- INSERT INTO customers (first_name	, last_name)
-- VALUES 

-- ('Greg ', 'Jones'),
-- ('sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson');


-- SELECT * FROM customers ;

-- exo 2 items table 

-- CREATE TABLE items(
--  items_id SERIAL PRIMARY KEY,
--  product_desc VARCHAR (50) NOT NULL,
--  price SMALLINT NOT NULL
-- ) ;
-- Insert into items (product_desc , price)
-- VALUES 

-- ('SMALL DESK' , 100),
-- ('lARGE DESK',300),
-- ('FAN' , 80);

-- SELECT* FROM items ;

-- exo 3 : fetch 
-- All the items with a price above 80 (80 not included)


-- SELECT * 
-- FROM items
-- WHERE price > 80;

-- exo4 
-- All the items with a price below 300. (300 included)

-- SELECT * 
-- FROM items
-- WHERE price <= 300;

-- exo5 all customers whose last name is Smith 

-- SELECT *
-- from customers 
-- where last_name ='Smith';

-- exo6 Jones

-- SELECT *

-- from customers

-- where last_name='Jones'

-- exo6 

-- SELECT * 
-- FROM customers 
-- where first_name!= 'Scott';