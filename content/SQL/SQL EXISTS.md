#SQL 
[[SQL MOC]]
-- --

The `EXISTS` [[Using SQL|command]] checks for the existence of records in a [[SQL Subqueries|subquery]].

Unlike typical [[SQL Subqueries|subqueries]], the subquery is evaluated for each record in the parent query, which makes it inefficient.

```SQL
SELECT firstName, lastName
FROM customers
WHERE EXISTS
    (SELECT customerId
    FROM orders
    WHERE customerId = customers.customerId);
```