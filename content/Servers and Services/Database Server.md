---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
---
-- --

A database server provides other computers with services for accessing a database, often using a [[SQL Description#Popular Database Management Systems|DBMS]]. 

# PHPMyAdmin & Adminer

These are tools which provide a graphical frontend to manage a MySQL database, but cannot be used in production.

# Example Setup

## Install MySQL

```Shell
$ sudo apt-get update
$ sudo apt-get install mysql-s
```
## Basic Security Configuration

```Shell
$ sudo mysql_s
$ sudo ufw enable
$ sudo ufw allow mysql
$ netstat -ant
```

Create password configurations, set password, remove anonymous user, disallow remote root. 

Enable firewall and allow MySQL.
## Create a simple database

```Shell
$ sudo mysql -u root -p
mysql> show databases;
mysql> create database demo;
mysql> use demo;
mysql> CREATE TABLE users {
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL, 
	PRIMARY KEY (id)
	};
mysql> show tables;
mysql> describe users;
mysql> INSERT INTO users (name) VALUES
	('james'), ('laura'), ('alan'), ('berth');
mysql> SELECT * FROM users;
mysql> SELECT names FROM users WHERE id > 2;
```

## Load backup

```Shell
$ sudo mysql -u root -p -t < employees.sql
```
## Modify Database

```SQL
ALTER TABLE employees ADD email VARCHAR(255);
UPDATE employees SET email = "bob@gmail.com" WHERE emp_no = 1000;
```
## Configure User

```SQL
CREATE USER 'HR'@'localhost' IDENTIFIED WITH mysql_native_password BY 'superStrong123!';
GRANT ALL PRIVILEGES ON employees.* TO 'HR'@'localhost';
SHOW GRANTS FOR 'HR'@'localhost';
FLUSH PRIVLEGES;
```
## Configure Graphical Tool

```Shell
$ sudo apt-get install apach2 php php-my
$ cd /var/www/html
$ wget https://github.com/vrama/adminer/releases/download/v4.7.7/adminer-4.7.7-mysql-en.php
$ sudo service apache2 start
$ 
```
## Export Backup

```Shell
$ mysqldump
```

# Setup Tips

- Validate IP connectivity rules
- Run `mysql_secure_installation`
- Check appropriate privileges and user restrictions
- Remove history file
- Consider removing remote logins
- Limit MySQL verbs for automated penetration tools like `SHOW DATABASES`
- Update regularly
- Check database size