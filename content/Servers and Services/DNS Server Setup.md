---
tags:
  - "#server"
MOC: "[[Servers and Services MOC]]"
Parent: "[[DNS Server]]"
---
-- --

This is how to setup a [[DNS Server]] using `dnsnasq`.

```Shell
$ sudo apt-get install dnsnasq net-tools
$ sudo netstat -antp
$ cat /etc/dnsnasq.d/README
```

Example `dnsnasq.conf`:
```text
#/etc/dnsnasq.conf
domain-needed
bogus-priv

expand-hosts

listen-address=127.0.0.1
listen-address=<inet address>
bind-interfaces

server=8.8.8.8
server=8.8.4.4

local=/eviltest.test/
```

Example `/etc/hosts`
```
192.168.0.13 blog blog.eviltest.test
126.0.0.13 email email.eviltest.test

127.0.0.1 localhost
...
```
