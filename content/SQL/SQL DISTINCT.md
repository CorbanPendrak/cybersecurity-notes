#SQL 
[[SQL MOC]]
-- --

The `DISTINCT` [[Using SQL|command]] removes duplicated data rows from a [[SQL SELECT|SELECT]] query

```SQL
SELECT DISTINCT field FROM tablename;
```

# Example

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

## Without `DISTINCT`

```SQL
SELECT country FROM customers;
```

| country        |
| -------------- |
| United States  |
| Canada         |
| United Kingdom |
| United States  |
| United Kingdom |
| United States  |
| United Kingdom |
| United Kingdom |
| United Kingdom |
| Canada         |
## With `DISTINCT`

```SQL
SELECT DISTINCT country FROM customers;
```


| country        |
| -------------- |
| United States  |
| Canada         |
| United Kingdom |
