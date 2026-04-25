#SQL 
[[SQL MOC]]
-- --

Databases store data. There are two types of databases depending on how they store data.

## Relational Databases

Relational databases structure data storage in tables with a fixed maximum size. Relational database tables can be related together based on primary and foreign keys. Each table must have a primary key, typically a unique ID for each row. Foreign keys store the primary keys of another table.

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

| orderId | date       | currency | total | customerId |
| ------- | ---------- | -------- | ----- | ---------- |
| 1       | 2020-11-14 | $        | 111   | 6          |
| 2       | 2020-07-07 | £        | 958   | 4          |
| 3       | 2021-02-18 | £        | 721   | 2          |
| 4       | 2020-05-25 | $        | 834   | 4          |
| 5       | 2020-07-10 | £        | 47    | 1          |
| 6       | 2021-02-27 | £        | 587   | 4          |
| 7       | 2021-03-04 | £        | 198   | 10         |
| 8       | 2020-09-03 | $        | 200   | 3          |
| 9       | 2020-11-17 | £        | 726   | 3          |
| 10      | 2020-12-29 | $        | 200   | 5          |
In this table, `orderId` is the primary key and `customerId` is a foreign key.
## Non-relational Databases

Non-relational databases hold unstructured data for ambiguous data types. These databases are also called NoSQL databases because they don't use SQL.

This type of database can be useful for data like log messages, since they vary from system to system with varying types and message size.