---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
Parent: "[[Log Server]]"
---
-- --


This is how to setup a basic Rsyslog server and building a database. Rsyslog connects the applications on the users computer to the databases and the dashboard and management of the log server.

On client, add server address with `syslog-server` to `/etc/hosts`.

On server, install `rsyslog` with [[The apt-get Command|apt-get]] and check with `systemctl status rsyslog`. Enable [[TCP Protocol]] and [[UDP Protocol]] in `/etc/rsyslog.conf`. Restart with `systemctl restart rsyslog`.
