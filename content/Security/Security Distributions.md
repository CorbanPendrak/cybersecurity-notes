---
tags:
  - security
MOC: "[[Security Concepts MOC]]"
---
-- --

Security distributions preconfigure and install common security tools.

# Kali Linux

[This distribution](https://www.kali.org/) is made by Offensive Security (company) for general security professionals.

Kali has several wordlists in `/usr/share/wordlists`. 

```Shell
openssl passwd -1
docker pull kalilinux/kali-rolling
docker run -t -i kalilinux/kali-rolling /bin/bash
apt-get update; apt-get install vim wordlists john
gunzip /usr/share/wordlists/rockyou.txt.gz
john crack.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

# Slingshot

[This distribution](https://www.sans.org/tools/slingshot/) is maintained by SANS. 

- Consistent experience for SANS students
- Extensive virtual environments
- Repeatable testable building process
- Automated testing during build
- Streamlines courseware creation

# SIFT

[This distribution](https://www.sans.org/tools/sift-workstation/) is maintained by SANS specifically for forensics.

- Better Memory management
- Latest forensic tools
- Cross compatibility
- Stand-alone installer
- Expanded filesystem support