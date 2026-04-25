#SQL 
[[SQL MOC]]
-- --

The `UNION` [[Using SQL|command]] combines the result of two [[SQL SELECT|SELECT]] statements.

```SQL
SELECT DISTINCT country AS "countries & currencies" FROM customers
UNION
SELECT DISTINCT currency AS "countries & currencies" FROM orders;
```