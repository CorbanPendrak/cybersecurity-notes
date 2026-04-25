#SQL 
[[SQL MOC]]
-- --

The `WHERE` [[Using SQL|command]] can filter results from a [[SQL SELECT|SELECT]]. 

```SQL
SELECT fields FROM tablename WHERE condition;
```

# Conditions

The simplest condition is equality.

```SQL
SELECT * FROM orders WHERE currency = "$" ORDER BY total ASC;
```

## Linking Tables

An important condition is linking tables according to the primary and foreign key pair, which is similar to [[SQL JOIN|JOIN]].

|customerId|firstName|lastName|address|city|country|
|---|---|---|---|---|---|
|1|Ursa|Vasquez|P.O. Box 878, 8416 Nullam St.|Worcester|United States|
|2|Quyn|Meyer|P.O. Box 670, 7155 Tincidunt St.|Price|Canada|
|3|Orli|Klein|4981 Gravida St.|Barrow-in-Furness|United Kingdom|

|orderId|date|currency|total|customerId|
|---|---|---|---|---|
|1|2020-11-14|$|111|6|
|2|2020-07-07|£|958|4|
|3|2021-02-18|£|721|2|

```SQL
SELECT orders.orderId, customers.firstName, customers.lastName, orders.currency, orders.total
FROM orders, customers
WHERE orders.customerId = customers.customerId;
```
