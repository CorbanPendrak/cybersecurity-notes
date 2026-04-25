---
tags:
  - SQL
MOC: "[[SQL MOC]]"
---
-- --

After [[Installing MariaDB#Create a Table|creating the database]], the tables need to be created. 

```SQL
CREATE TABLE `<table_name>` (
	`<column_name>` <type> <constraint>,
	`<column_name>` <type> <constraint>,
	`<column_name>` <type> <constraint>,
	PRIMARY KEY (`<column_name>)
) AUTO_INCREMENT-1
```

The available tables can be shown with `show tables`, and a particular table described with `describe <table_name>`. 
# Datatypes

## Integers

This can be signed or unsigned. The signed maximum is 2147483647 and the unsigned maximum is 4294967295. 

The parameter is the number of digits displayed.

- tinyint(x)
- smallint(x)
- mediumint(x)
- bigint(x)
- int(x)

## Floats

Floating point numbers accept the number of digits to display and the number of decimal places as parameters. The maximum number of decimals is 24.

- float(x, y)
- double(x, y)
- decimal(x, y)

## Dates

The date datatype uses the international format YYY-mm-dd.

- datetime
- timestamp
- time
- year

## Strings

The parameter for varchar is the maximum length string, up to 255.

- varchar(s)
- char(s)
- blob
- tinyblob
- mediumblob
- longblob
- enum

# Constraints

Constraints follow the the type declaration for the column and defines the rules for that field.

| Constraint                                                                        | Explanation                                        |
| --------------------------------------------------------------------------------- | -------------------------------------------------- |
| `default NULL`                                                                    | Value is `NULL` if not entered                     |
| `NOT NULL auto_increment`                                                         | Value never is `NULL` and automatically increments |
| ``PRIMARY KEY (`<column_name>`)``                                                 | Identifies primary key of table                    |
| `AUTO_INCREMENT=1`                                                                | Starts `auto_increment` from 1                     |
| ``FOREIGN KEY (`<column_name`>) REFERENCES <other_table>(`<other_column_name>`)`` | Enforce relationship between rables                |

# Example

```SQL
CREATE TABLE `customers` (
  `customerId` mediumint(8) unsigned NOT NULL auto_increment,
  `firstName` varchar(255) default NULL,
  `lastName` varchar(255) default NULL,
  `address` varchar(255) default NULL,
  `city` varchar(255),
  `country` varchar(100) default NULL,
  PRIMARY KEY (`customerId`)
) AUTO_INCREMENT=1;

CREATE TABLE `orders` (
  `orderId` mediumint(8) unsigned NOT NULL auto_increment,
  `date` varchar(255),
  `currency` varchar(255) default NULL,
  `total` mediumint default NULL,
  `customerId` mediumint unsigned NOT NULL,
  PRIMARY KEY (`orderId`),
  FOREIGN KEY (`customerId`) REFERENCES customers(`customerId`)
) AUTO_INCREMENT=1;
```