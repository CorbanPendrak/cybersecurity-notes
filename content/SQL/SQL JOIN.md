#SQL 
[[SQL MOC]]
-- --

The `JOIN` [[Using SQL|command]] combines the results from multiple tables. 

`customers`

| customerId | firstName | lastName | address                            | city              | country        |
| ---------- | --------- | -------- | ---------------------------------- | ----------------- | -------------- |
| 1          | Ursa      | Vasquez  | P.O. Box 878, 8416 Nullam St.      | Worcester         | United States  |
| 2          | Quyn      | Meyer    | P.O. Box 670, 7155 Tincidunt St.   | Price             | Canada         |
| 3          | Orli      | Klein    | 4981 Gravida St.                   | Barrow-in-Furness | United Kingdom |
| 4          | Tallulah  | Hines    | 6279 Pellentesque Street           | Omaha             | United States  |
| 5          | Joel      | Ross     | P.O. Box 842, 4634 Egestas Avenue  | Clovenfords       | United Kingdom |
| 6          | Charlotte | Ramos    | 794-1654 A Rd.                     | Akron             | United States  |
| 7          | Dennis    | Avery    | P.O. Box 506, 4804 Molestie Avenue | Matlock           | United Kingdom |
| 8          | Igor      | Malone   | 6627 Porttitor Rd.                 | Irvine            | United Kingdom |
| 9          | Connor    | Witt     | 5979 Vel St.                       | Tain              | United Kingdom |
| 10         | Karen     | Marquez  | Ap \#524-1173 Metus. Road          | Annapolis Royal   | Canada         |
|            |           |          |                                    |                   |                |

`orders`

|orderId|date|currency|total|customerId|
|---|---|---|---|---|
|1|2020-11-14|$|111|6|
|2|2020-07-07|£|958|4|
|3|2021-02-18|£|721|2|
|4|2020-05-25|$|834|4|
|5|2020-07-10|£|47|1|
|6|2021-02-27|£|587|4|
|7|2021-03-04|£|198|10|
|8|2020-09-03|$|200|3|
|9|2020-11-17|£|726|3|
|10|2020-12-29|$|200|5|

# INNER

`INNER JOIN` retrieves rows that meet a condition in both tables

This query will result in the same as [[SQL WHERE#Linking Tables|WHERE]] does. So, any customer that doesn't have a `customerId` in the `orders` table is not shown. 

```SQL
SELECT orders.orderId, customers.firstName, customers.lastName, orders.currency, orders.total
FROM orders
INNER JOIN customers ON orders.customerId = customers.customerId;
```

|customerId|firstName|lastName|orderId|currency|total|
|---|---|---|---|---|---|
|6|Charlotte|Ramos|1|$|111|
|4|Tallulah|Hines|2|£|958|
|2|Quyn|Meyer|3|£|721|
|4|Tallulah|Hines|4|$|834|
|1|Ursa|Vasquez|5|£|47|
|4|Tallulah|Hines|6|£|587|
|10|Karen|Marquez|7|£|198|
|3|Orli|Klein|8|$|200|
|3|Orli|Klein|9|£|726|
|5|Joel|Ross|10|$|200|

# LEFT

`LEFT JOIN` returns all results from first table and matching results from the second table. This query would list every customer and the details of the order if available or `NULL`. 

```SQL
SELECT customers.customerId, customers.firstName, customers.lastName, orders.orderId, orders.currency, orders.total
FROM customers
LEFT JOIN orders ON customers.customerId = orders.customerId
ORDER BY customers.customerId ASC;
```

|customerId|firstName|lastName|orderId|currency|total|
|---|---|---|---|---|---|
|1|Ursa|Vasquez|5|£|47|
|2|Quyn|Meyer|3|£|721|
|3|Orli|Klein|8|$|200|
|3|Orli|Klein|9|£|726|
|4|Tallulah|Hines|2|£|958|
|4|Tallulah|Hines|4|$|834|
|4|Tallulah|Hines|6|£|587|
|5|Joel|Ross|10|$|200|
|6|Charlotte|Ramos|1|$|111|
|7|Dennis|Avery|NULL|NULL|NULL|
|8|Igor|Malone|NULL|NULL|NULL|
|9|Connor|Witt|NULL|NULL|NULL|
|10|Karen|Marquez|7|£|198|
# RIGHT

`RIGHT JOIN` is the same as [[SQL JOIN#LEFT|LEFT JOIN]], but includes all the results from the second table.

```SQL
SELECT customers.customerId, customers.firstName, customers.lastName, orders.orderId, orders.currency, orders.total
FROM orders
RIGHT JOIN customers ON customers.customerId = orders.customerId
ORDER BY customers.customerId ASC;
```

Produces same result as [[SQL JOIN#LEFT|LEFT JOIN]].

# FULL

`FULL JOIN` returns the results from both tables but is not supported by [[SQL Description#MySQL|MySQL]] or [[SQL Description#MariaDB|MariaDB]].

It can however be implemented using [[SQL UNION|UNION]].

```SQL
SELECT customers.customerId, customers.firstName, customers.lastName, orders.orderId, orders.currency, orders.total
FROM customers
LEFT JOIN orders ON customers.customerId = orders.customerId
UNION
SELECT customers.customerId, customers.firstName, customers.lastName, orders.orderId, orders.currency, orders.total
FROM customers
RIGHT JOIN orders ON customers.customerId = orders.customerId
ORDER BY customerId;
```