---
socialDescription: Corban Pendrak's cybersecurity notes and writeups.
title: Cybersecurity Notes
description: Corban Pendrak's Cybersecurity Notes
socialImage: socialPreview.png
---
---

This is Corban Pendrak's cybersecurity notes and writeups. 

> [!question]- Navigation
>Click links to move around or use the graph. 
>Maps of Content (MOCs) are lists of other notes/resources for organization.
# Modules
- [[Hardware MOC]]
- [[Linux MOC]]
- [[Network MOC]]
- [[Offensive Security Concepts MOC]]
- [[Programming MOC]]
- [[Regular Expressions]]
- [[Web MOC]]
- [[Windows MOC]]
- [[HackTheBox Writeups]]

> [!warning]- Fix backlinks (for Obsidian editing)
> ```base
> formulas:
> Backlinks: file.backlinks.filter(! file.hasLink(value)).map(value.asFile())
> Num Backlinks: file.backlinks.filter(! file.hasLink(value)).length
>views:
>  - type: table
>    name: Non-reciprocal Backlinks
>    filters:
>      and:
>        - file.name.contains("MOC")
>        - file.backlinks.length > 0
>    order:
>      - file.name
>      - formula.Backlinks
>    sort:
>      - property: formula.Num Backlinks
>        direction: DESC
>    columnSize:
>      file.name: 213
>```
> file.backlinks.filter(! file.hasLink(value)).map(file)
# Todo
- [ ] research syscall hooking
- [ ] research linux kernel for persistence
	- [ ] dmesg is kernel log
- [ ] research rootkits/C2
	- [ ] Sliver
	- [ ] Singularity
- [ ] Create [parent-child](https://linuxcommand.org/lc3_wss0150.php) malicious process triggered by killing
	- [ ] Theme it Jinx or Batman
- [ ] Research fanotify
- [ ] Research Apparmor
- [ ] char device interacts with kernel for privelige escalation
	- [ ] requires root, but useful for persistence, unless kernel bug
- [ ] Hooks replace kernel commands with user defined command
	- [ ] More hooks is more functionality.
	- [ ] tcp_seq_show hook for hiding from netstat
- [ ] Hide PID in /proc
- [ ] Don't dereference user memory in root/kernel
- [ ] Hide process in Windows in kernel \_EPROCESS double linked list
- [ ] Minifilters with highest altitude value allows for Windows file hiding
- [ ] GRFOBins/LOLBAS
- [ ] Wiki
	- [ ] Review MOCs
		- [ ] Write social Descriptions
		- [ ] Add link in generate result
		- [ ] Add link in social preview
- [ ] Move over stuff from other vault
	- [ ] Maintain some privacy/consider total privacy
- [ ] Work on breaks
- [ ] OWASP article
- [ ] Using Hashcat
- [ ] Common ports
- [ ] Recompile [bash](https://ftp.gnu.org/gnu/bash/)
- [ ] Using tmux
	- [ ] [Tmux Cheat Sheet](https://tmuxcheatsheet.com/)
	- [ ] [IppSec Video](https://www.youtube.com/watch?v=Lqehvpe_djs)
- [ ] Privacy
	- [ ] [Tails](https://tails.net/install/mac/index.en.html)
	- [ ] [Tor](https://www.torproject.org/?noredirect=1)
	- [ ] [Signal](https://signal.org/docs/specifications/doubleratchet/)
- [ ] Physical breaks
	- [ ] [GrabAccess](https://github.com/Push3AX/GrabAccess?tab=readme-ov-file)
- [ ] Reference/cheatsheets
	- [ ] Common port numbers
		- [ ] [Top Ports from Nmap](https://nullsec.us/top-1-000-tcp-and-udp-ports-nmap-default/)
		- [ ] [Common Ports](https://web.archive.org/web/20240315102711/https://packetlife.net/media/library/23/common-ports.pdf)
		- [ ] [More common ports](https://www.stationx.net/common-ports-cheat-sheet/)
	- [ ] Common commands
- [ ] [GodPotato](https://medium.com/@iamkumarraj/godpotato-empowering-windows-privilege-escalation-techniques-400b88403a71)
- [ ] [Initramfs](https://wiki.debian.org/initramfs)
- [ ] [Kraker.js](https://weakpass.com/tools/kraker-js)
- [ ] [Randomart image](https://bytes.zone/posts/what-is-the-randomart-image-for/)
	- [ ] [Research paper on randomart images](https://users.ece.cmu.edu/~adrian/projects/validation/validation.pdf)
- [ ] [Cryptography](https://cryptohack.org/courses/)
- [ ] [Email stuff](https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/)
	- [ ] [More](https://dkim.org/)
	- [ ] [SPF](https://dmarcian.com/what-is-spf/)
	- [ ] [SMTP AUTH](https://www.samlogic.net/articles/smtp-commands-reference-auth.htm)
	- [ ] [Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)
- [ ] Common payloads
	- [ ] [Payloads All The Things](https://swisskyrepo.github.io/PayloadsAllTheThings/#sponsors)
	- [ ] [High on Coffee](https://highon.coffee/blog/reverse-shell-cheat-sheet/#php-reverse-shell)
	- [ ] [PEASS](https://github.com/peass-ng/PEASS-ng)
	- [ ] [HackTricks](https://hacktricks.wiki/en/index.html)
	- [ ] [Reverse Shells](https://swisskyrepo.github.io/InternalAllTheThings/cheatsheets/shell-reverse-cheatsheet/#tools)
	- [ ] [Impacket](https://github.com/fortra/impacket)
- [ ] Challenges
	- [ ] [OvertheWire](https://overthewire.org/wargames/)
	- [ ] [UndertheWire](https://underthewire.tech/wargames)
	- [ ] [Damn Vulnerable Web App](https://github.com/digininja/DVWA)
	- [ ] [Metasploitable 2](https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/)
	- [ ] [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- [ ] [Nmap Docs](https://nmap.org/book/toc.html)
- [ ] Writeups
	- [ ] [0xdf](https://0xdf.gitlab.io/)
	- [ ] [pwndoc](https://github.com/pwndoc/pwndoc)
	- [ ] [Ghostwriter](https://www.ghostwriter.wiki/home)
	- [ ] [AttackForge](https://attackforge.com/)
- [ ] YouTube Channels
	- [ ] [LiveOverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w)
	- [ ] [STÖK](https://www.youtube.com/channel/UCQN2DsjnYH60SFBIA6IkNwg)
	- [ ] [VbScrub](https://www.youtube.com/channel/UCpoyhjwNIWZmsiKNKpsMAQQ)
	- [ ] [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA)
	- [ ] [CPTC Bootcamp](https://www.youtube.com/playlist?list=PLT0mI8huYm_rMIQLENRnh-jDwg2jQU31s)
	- [ ] [CPTC10 Presentation](https://www.youtube.com/watch?v=nom3cr5H6D0)
- [ ] Bug Bounty Programs
	- [ ] [Bugcrowd](https://bugcrowd.com/engagements?category=bug_bounty&page=1&sort_by=promoted&sort_direction=desc)
	- [ ] [HackerOne](https://hackerone.com/directory/programs)
- [ ] [CVSS Calculator](https://www.first.org/cvss/calculator/4.0)
- [ ] [sshuttle](https://sshuttle.readthedocs.io/en/stable/installation.html)


```base
formulas:
  Backlinks: file.backlinks.filter(! file.hasLink(value)).map(value.asFile())
  Num Backlinks: file.backlinks.filter(! file.hasLink(value)).length
views:
  - type: table
    name: Table
    filters:
      and:
        - file.name.contains("MOC")
        - file.backlinks.length > 0
        - file.backlinks.filter(! file.hasLink(value.asFile())).length > 0
    order:
      - file.name
      - formula.Backlinks
    sort:
      - property: file.name
        direction: ASC
      - property: formula.Num Backlinks
        direction: DESC

```
