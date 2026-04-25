---
MOC: "[[Web MOC]]"
---
----
Subdomains are extensions of the main domain name, `blog.example.com`. Similarly, [[VHost|VHosts]] are configurations allowing for multiple websites, either as top-level domains or subdomains.
# Brute forcing
Subdomain Brute forcing uses wordlists to find valid subdomains. 

```shell
$ dnsenum --enum <DOMAIN> -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-20000.txt -r

$ ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u http://FUZZ.example.com/ -mc 200,301,302,307,401,403
```