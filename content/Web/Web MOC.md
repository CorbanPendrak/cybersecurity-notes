---
MOC: "[[index]]"
tags:
  - "#MOC"
---
---
# [[Web Enumeration]]
- [[Search Engine Basics]]
- [[WHOIS]]
- [[Subdomain]]
- Protocols
	- [[HTTP Protocol]]
	- [[DNS Protocol]]
	- [[Cookies]]
- Programming
	- [[HTML]]
	- [[JavaScript]]
	- [[PHP]]
- Tools
	- [Nikto](https://github.com/sullo/nikto) general scanning
	- [WafW00f](https://github.com/enablesecurity/wafw00f) WAF scanning
	- [FinalRecon](https://github.com/thewhiteh4t/FinalRecon)
	- [Recon-ng](https://github.com/lanmaster53/recon-ng)
	- [theHarvester](https://github.com/laramies/theHarvester)
	- [SpiderFoot](https://github.com/smicallef/spiderfoot)
	- [OSINT Framework](https://osintframework.com/).


- Methodology
	- click around on website
	- check `robots.txt`, `sitemap.xml`, `/.well-known/`
	- default cred
	- inspect page source
	- write down everything interesting
- Recon
	- Check subdomains
	- fuzzing
	- port scanning
	- google dorking
	- check exposed .git directories
- Tools
	- Directory enumeration
		- Ffuf
		- Dirbuster
	- Recon
		- Wappalyzer
		- Burp suite
	- SQLmap
	- WPScan
	- Nuclei
	- Synk
	- Curl/wget
- Common Vuln
	- SQL injection
	- XSS
	- Insecure Direct Object Reference
	- Broken Access Control
	- Authentication bypass
	- Server-side request forgetrt
	- file upload
	- path traversal
	- sensitive data

# To Do
- [ ] 