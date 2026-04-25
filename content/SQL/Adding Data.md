---
tags:
  - SQL
MOC: "[[SQL MOC]]"
---
-- --

Data is added to a [[Creating Tables|table]] with `INSERT INTO`.

```SQL
INSERT INTO `<table_name>` (`<column_1>`, `<column_2>`)
VALUES ("<data_1>", "<data_2>"), ("<data_1>", "<data_2>"),("<data_1>", "<data_2>"), ("<data_1>", "<data_2>"),("<data_1>", "<data_2>"), ("<data_1>", "<data_2>");
```

# Add Column

```SQL
ALTER TABLE employees ADD email VARCHAR(255);
```

# Add Entry

```SQL
UPDATE employees SET email = "bob@gmail.com" WHERE emp_no = 1000;
```