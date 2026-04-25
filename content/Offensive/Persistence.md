---
tags:
  - security
MOC: "[[Security Concepts MOC]]"
---
-- --

The problem of persistent access is a problem of host analysis and closely related to [[Forensics]]. After an attacker gets access to a system with [[Offensive Security Concepts MOC|some method]], persistence allows them to continually access the system typically without the difficulty of the initial attack. 

For host analysis, finding persistent access on a device is necessary to clear and enable hardening. 

For an attack to have persistence, the object or process characteristics must continue to exist after the machine is powered off, stored somewhere in non-volatile storage.

# Examples

## Scheduled Tasks

A scheduled task, like opening a port or checking on an outside application, can launch at pre-defined times to allow for persistent access.

To find scheduled tasks in [[Windows MOC|Windows]], use [[Windows PowerShell|PowerShell]].

```PowerShell
echo "Find scheduled tasks"
Get-ScheduledTask
(Get-ScheduledTask -TaskName "<task_name>").Action
```

## Services

A service is a program that runs in the background.

Find background [[Windows MOC|Windows]] services in [[Windows PowerShell|PowerShell]]:

```PowerShell
echo "Find services"
Get-Service
echo "Using WmiObject"
Get-WmiObject -Class win32_service | select name, displayname, state, pathname
```

## Users

Creating a new user, especially with administrative privileges, is an important way to gain persistent access to a machine. 

Get a list of users with [[Windows PowerShell|PowerShell]] in [[Windows MOC|Windows]]:

```PowerShell
Get-LocalUser
```
