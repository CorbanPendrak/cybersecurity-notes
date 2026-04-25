#SQL 
[[SQL MOC]]
-- --

The `SELECT` [[Using SQL#Structure|command]] retrieves data from one or more tables in a database and the `FROM` identifies the table to retrieve data from. 

```SQL
SELECT comma, separated, fields
FROM tablename;
```

# Wildcard

To extract all data from the table, the wildcard operator, `*`, can represent all columns.

```SQL
SELECT * FROM customers;
```

# Example

`customers` table:

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

To get the `firstName` and `lastName` of every customer in the table:
```SQL
SELECT firstName, lastName FROM customers;
```
