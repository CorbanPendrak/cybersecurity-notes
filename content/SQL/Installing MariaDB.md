#SQL 
[[SQL MOC]]
-- --

This is how to install the [[SQL Description#MariaDB|MariaDB]].

# Ubuntu

## Installing

Update [[The apt-get Command|package manager]]:
```shell
$ sudo apt update
$ sudo apt install mariadb-server
```

Configure DBMS:
```shell
$ sudo mysql_secure_installation
```
Enter a password for root user and configure options (typically `y`).

## Create a User

```shell
$ sudo mysql -u root -p
MariaDB [(none)]> 
CREATE USER 'corban'@'localhost' IDENTIFIED BY 'super_secure_password';
GRANT ALL PRIVILEGES ON *.* TO 'corban'@'localhost';
FLUSH PRIVILEGES;
exit
$ mysql -u corban -p
MariaDB [(none)]>
```

## Create a Database

```SQL
CREATE DATABASE <database_name>;
USE <database_name>;
```