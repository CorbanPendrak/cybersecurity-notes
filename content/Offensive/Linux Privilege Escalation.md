---
tags:
  - offensive
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Exploiting a service gains access with the same level of privileges as the server. Generally this results in an unprivileged user account. Privilege escalation gets superuser privileges for more powerful commands. 

Set User ID runs at the privilege level of the file owner. Set Group ID runs the program at the group owner's privilege level. You can easily find files with SUID permissions using `{shell icon}find / -perm -4000 -user root -type f -print 2>/dev/null` or the SGID permissions using `{shell}-perm 2000`.

# Exploiting Services

One of the best ways is to find services already running and their exploits. 

# Kernel Exploits

Exploiting the Linux kernel itself is very rare but very serious. The kernel version is found with `{shell icon}uname -a`. 

The DirtyCOW exploit allows for writing to non-writeable files.

# Wildcard Injection

Wildcards in cron jobs can be exploited using files named as folders.

```shell
echo "deletes top level"; rm *
touch -rf
echo "deletes recursively"; rm *
```

# Sudo

While sudo may only be setup for certain commands, some commands allow arbitrary command execution.