---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Enumeration tries to find as much specific information as possible, using both active scans and passive methods. This is typically different than [[OSINT]], because that is entirely passive. It is useful to know the systems and defensive measures. The goal is to find all possible methods.
# Principles
- Consider all points of view
- Distinguish what you can and can't see
- Understand the target through additional methods
# Questions
- What can you see?
- Why can you see it?
- What do you gain from it?
- How can you use it?
- What do you not see?
- Why can you not see things?
# Layers
- Internet Presence
	- Target systems
- Gateway
	- Network systems
- Accessible Services
	- Functionality of targets
- Processes
	- Dependencies between systems
- Privileges
	- Reach of privileges
- OS Setup
	- System management and internal info

# Common Things to Check
- [SSL Certs](https://crt.sh/)
- [IoT Devices](https://www.shodan.io/)
- DNS records: `dig`
- AWS/GCP/Azure
- Possible infrastructure with [domain.glass](https://domain.glass/), [GrayHatWarfare](https://buckets.grayhatwarfare.com/), 
- Social sites for company and empolyees
- [[Network/FTP Protocol|FTP Protocol]]
	- Anonymous users
- [[SMB Protocol]]
	- `rpcclient`
	- [SMBMap](https://github.com/ShawnDEvans/smbmap)
	- [CrackMapExec](https://github.com/byt3bl33d3r/CrackMapExec)
	- [enum4linux-ng](https://github.com/cddmp/enum4linux-ng)
- [[NFS Protocol]]
- [[DNS Server]]
	- `fuf`
- [[SMTP Protocol]]
	- Default [[Nmap]] scripts
		- `smtp-open-relay` script
- [[IMAP Protocol]]/[[POP3 Protocol]]
- [[SNMP Protocol]]
- [[MySQL]]