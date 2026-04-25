---
MOC: "[[Web MOC]]"
---
-- --
**VHosts** are configurations allowing for multiple websites, either as top-level domains or subdomains. Similarly, [[Subdomain|subdomains]] are extensions of the main domain name, `blog.example.com`. 

Name based virtual hosting relies on the [[HTTP Protocol|HTTP]] Host header to distinguish websites. IP based relies on a unique [[IP addresses|IP]] per website. Port based relies on a unique port per website.

# Brute Forcing
```shell
ffuf -u http://<IP> -H "Host: FUZZ.<DOMAIN>" -t 200 -timeout 2 -ac -fs 0 -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt

# Two levels
ffuf -u http://<IP> -H "Host: FUZZ1.FUZZ2.<DOMAIN>" -t 200 -timeout 2 -ac -fs 0 -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt:FUZZ1 -w /usr/share/SecLists/Discovery/DNS/subdomains-top1million-110000.txt:FUZZ2

gobuster vhost -u http://<IP> -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt --append-domain
```