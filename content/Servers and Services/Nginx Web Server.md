---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
---
-- --

This is a guide for configuring Nginx, PHP, and Let's Encrypt for a [[Web Server]].

# Install Nginx

```Shell
$ sudo apt-get install nginx net-tools -y
$ netstat -ant
```

## Firewall

```Shell
$ sudo ufw app list
$ sudo ufw allow 'Nginx Full'
$ sudo ufw allow 'OpenSSH'
$ sudo service ufw enable
$ sudo service ufw start
$ sudo ufw status
```

## PHP

```SHELL
$ sudo apt-get install php-fpm
$ sudo vi default
```

Uncomment PHP enabling

## Site

```Shell
$ cd /var/www/html
$ sudo rm index.nginx-debian.html
$ sudo touch index.html
$ sudo echo "<?php phpinfo(); ?>" > test.php
```

# Encryption

Certbot automates renewal through Let's Encrypt.

```Shell
$ sudo apt-get install snapd
$ sudo snap install --classic certbot
$ sudo certbot --nginx
$ 
```