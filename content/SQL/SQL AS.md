#SQL 
[[SQL MOC]]
-- --

The `AS` [[Using SQL|command]] assigns an alias to a table or field to temporarily rename it for the query. These can help make long SQL statements more readable or descriptive.

```SQL
SELECT field AS aliasname FROM tablename;
```

## Example

`customers` table

|customerId|firstName|lastName| address                            |city|country|
|---|---|---|---|---|---|
|1|Ursa|Vasquez| P.O. Box 878, 8416 Nullam St.      |Worcester|United States|
|2|Quyn|Meyer| P.O. Box 670, 7155 Tincidunt St.   |Price|Canada|
|3|Orli|Klein| 4981 Gravida St.                   |Barrow-in-Furness|United Kingdom|
|4|Tallulah|Hines| 6279 Pellentesque Street           |Omaha|United States|
|5|Joel|Ross| P.O. Box 842, 4634 Egestas Avenue  |Clovenfords|United Kingdom|
|6|Charlotte|Ramos| 794-1654 A Rd.                     |Akron|United States|
|7|Dennis|Avery| P.O. Box 506, 4804 Molestie Avenue |Matlock|United Kingdom|
|8|Igor|Malone| 6627 Porttitor Rd.                 |Irvine|United Kingdom|
|9|Connor|Witt| 5979 Vel St.                       |Tain|United Kingdom|
|10|Karen|Marquez| Ap \#524-1173 Metus. Road          |Annapolis Royal|Canada|

```SQL
SELECT customerId, CONCAT_WS(' ', firstName, lastName) AS fullName FROM customers;
```

|customerId|fullName|
|---|---|
|1|Ursa Vasquez|
|2|Quyn Meyer|
|3|Orli Klein|
|4|Tallulah Hines|
|5|Joel Ross|
|6|Charlotte Ramos|
|7|Dennis Avery|
|8|Igor Malone|
|9|Connor Witt|
|10|Karen Marquez|

## Table Names

Aliases can shorten queries as well.

```SQL
SELECT orders.orderId, customers.firstName, customers.lastName, orders.currency, orders.total
FROM orders, customers
WHERE orders.customerId = customers.customerId;
```

With `AS`, this query becomes the following.

```SQL
SELECT o.orderId, c.firstName, c.lastName, o.currency, o.total
FROM orders AS o, customers AS c
WHERE o.customerId = c.customerId;
```
