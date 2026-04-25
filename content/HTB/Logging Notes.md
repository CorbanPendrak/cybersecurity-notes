---
MOC: "[[HackTheBox Writeups]]"
---
-- --

While these notes can be compiled into a writeup or a [[Penetration Test Report Template|report]], this section is primarily for you. Delete placeholder information where needed. This is where the summary for the report goes.

# Attack Path
This is where an outline of the entire compromise path. Use screenshots and command output where applicable.
# Credentials

| User             | Password          |
| ---------------- | ----------------- |
| wallace.everette | Welcome2026@      |
|                  | Em3rg3ncyPa$$2025 |
# Service Enumeration
```shell
sudo nmap -p- -v 10.129.24.188
sudo nmap -sC -sV -p 53,80,88,135,139,389,445,464,593,636,3268,3269,5985,8530,8531,9389,47001,49664,49665,49666,49667,49671,49686,49687,49690,49691,49713,49718,49736,49777 10.129.24.188

PORT      STATE SERVICE       VERSION
53/tcp    open  domain        Simple DNS Plus
80/tcp    open  http          Microsoft IIS httpd 10.0
|_http-title: IIS Windows Server
| http-methods:
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/10.0
88/tcp    open  kerberos-sec  Microsoft Windows Kerberos (server time: 2026-04-20 23:58:09Z)
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp   open  ldap          Microsoft Windows Active Directory LDAP (Domain: logging.htb0., Site: Default-First-Site-Name)
|_ssl-date: 2026-04-20T23:59:14+00:00; +7h00m07s from scanner time.
| ssl-cert: Subject:
| Subject Alternative Name: DNS:DC01.logging.htb, DNS:logging.htb, DNS:logging
| Not valid before: 2026-04-17T03:20:01
|_Not valid after:  2106-04-17T03:20:01
445/tcp   open  microsoft-ds?
464/tcp   open  kpasswd5?
593/tcp   open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ssl/ldap      Microsoft Windows Active Directory LDAP (Domain: logging.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject:
| Subject Alternative Name: DNS:DC01.logging.htb, DNS:logging.htb, DNS:logging
| Not valid before: 2026-04-17T03:20:01
|_Not valid after:  2106-04-17T03:20:01
|_ssl-date: 2026-04-20T23:59:13+00:00; +7h00m06s from scanner time.
3268/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: logging.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject:
| Subject Alternative Name: DNS:DC01.logging.htb, DNS:logging.htb, DNS:logging
| Not valid before: 2026-04-17T03:20:01
|_Not valid after:  2106-04-17T03:20:01
|_ssl-date: 2026-04-20T23:59:14+00:00; +7h00m07s from scanner time.
3269/tcp  open  ssl/ldap
|_ssl-date: 2026-04-20T23:59:13+00:00; +7h00m06s from scanner time.
| ssl-cert: Subject:
| Subject Alternative Name: DNS:DC01.logging.htb, DNS:logging.htb, DNS:logging
| Not valid before: 2026-04-17T03:20:01
|_Not valid after:  2106-04-17T03:20:01
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
8530/tcp  open  http          Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
|_http-title: Site doesn't have a title.
| http-methods:
|_  Potentially risky methods: TRACE               
8531/tcp  open  ssl/http      Microsoft IIS httpd 10.0
| ssl-cert: Subject: commonName=DC01.logging.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:DC01.logging.htb
| Not valid before: 2026-04-16T15:12:07            
|_Not valid after:  2027-04-16T15:12:07            
| tls-alpn:                                        
|_  http/1.1                                       
|_http-title: Site doesn't have a title.           
|_http-server-header: Microsoft-IIS/10.0           
|_ssl-date: 2026-04-20T23:59:13+00:00; +7h00m06s from scanner time.                                   
| http-methods:                                    
|_  Potentially risky methods: TRACE               
9389/tcp  open  mc-nmf        .NET Message Framing
47001/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)                                 
|_http-title: Not Found                            
|_http-server-header: Microsoft-HTTPAPI/2.0        
49664/tcp open  msrpc         Microsoft Windows RPC
49665/tcp open  msrpc         Microsoft Windows RPC
49666/tcp open  msrpc         Microsoft Windows RPC
49667/tcp open  msrpc         Microsoft Windows RPC
49671/tcp open  msrpc         Microsoft Windows RPC
49686/tcp open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
49687/tcp open  msrpc         Microsoft Windows RPC
49690/tcp open  msrpc         Microsoft Windows RPC
49691/tcp open  msrpc         Microsoft Windows RPC
49713/tcp open  msrpc         Microsoft Windows RPC
49718/tcp open  msrpc         Microsoft Windows RPC
49736/tcp open  msrpc         Microsoft Windows RPC
49777/tcp open  msrpc         Microsoft Windows RPC                                                   
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows                                  

Host script results:                               
| smb2-security-mode:                              
|   3:1:1:                                         
|_    Message signing enabled and required         
|_clock-skew: mean: 7h00m06s, deviation: 0s, median: 7h00m05s                                         
| smb2-time:                                       
|   date: 2026-04-20T23:59:05                      
|_  start_date: N/A



[2026-02-09 03:00:03.125] [PID:4102] [Thread:04] VERBOSE - ConnectionContext Dump: { Domain: "logging.htb", Server: "DC01", SSL: "False", BindUser: "LOGGING\svc_recovery", BindPass: "Em3rg3ncyPa$$2025", Timeout: 30 }
[2026-02-19 03:00:03.488] [PID:4102] [Thread:04] ERROR - System.DirectoryServices.Protocols.LdapException: A local error occurred.
   at System.DirectoryServices.Protocols.LdapConnection.Bind(NetworkCredential credential)
   at logging.IdentitySync.Engine.LdapProvider.Connect()
   --- Server Error Details ---
   Server error: 8009030C: LdapErr: DSID-0C090569, comment: AcceptSecurityContext error, data 52e, v4563
   Hex Error: 0x31 (LDAP_INVALID_CREDENTIALS)
   Win32 Error: 49 (Invalid Credentials)
   ----------------------------    
   

┌──(kali㉿kali)-[~/Downloads]
└─$ rpcclient -U "wallace.everette%Welcome2026@" 10.129.37.201

rpcclient $> enumdomusers
user:[Administrator] rid:[0x1f4]
user:[Guest] rid:[0x1f5]
user:[krbtgt] rid:[0x1f6]
user:[svc_recovery] rid:[0x838]
user:[jaylee.clifton] rid:[0x839]
user:[monique.chip] rid:[0x83a]
user:[kyson.abel] rid:[0x83b]
user:[fable.milford] rid:[0x83c]
user:[wellington.kylan] rid:[0x83d]
user:[serina.philander] rid:[0x83e]
user:[wallace.everette] rid:[0x83f]
user:[toby.brynleigh] rid:[0x840]
rpcclient $> enumdomgroups
group:[Enterprise Read-only Domain Controllers] rid:[0x1f2]
group:[Domain Admins] rid:[0x200]
group:[Domain Users] rid:[0x201]
group:[Domain Guests] rid:[0x202]
group:[Domain Computers] rid:[0x203]
group:[Domain Controllers] rid:[0x204]
group:[Schema Admins] rid:[0x206]
group:[Enterprise Admins] rid:[0x207]
group:[Group Policy Creator Owners] rid:[0x208]
group:[Read-only Domain Controllers] rid:[0x209]
group:[Cloneable Domain Controllers] rid:[0x20a]
group:[Protected Users] rid:[0x20d]
group:[Key Admins] rid:[0x20e]
group:[Enterprise Key Admins] rid:[0x20f]
group:[DnsUpdateProxy] rid:[0x44e]
group:[Emergency Recovery] rid:[0x835]
group:[IT] rid:[0x836]
group:[HR] rid:[0x837]
rpcclient $> queryusergroups 0x840
        group rid:[0x201] attr:[0x7]
        group rid:[0x200] attr:[0x7]

```
This section covers which services you've checked, both failed and successful. This can include things about the service, like subdomains, and vulnerabilities.
# Artifacts
If anything needs to be cleaned up by the client, it should be listed here. This includes when and where for service accounts and system changes. It is useful to provide a hash for files.
# Administrative Information
This is for information about the client, like contact information, specific objectives, rules, and scope.
# Activity Log
Overview of everything done for the test. Don't cut console output for the notes, only the report.
## Setup tmux for logging
Use prefix (`Ctrl+B`) and `Shift+I` to install plugins, `Shift+P` to start logging, and `Alt+P` to capture screen output.
```shell
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
tee -a .tmux.conf << 'EOF'
set -g @plugin 'tmux-plugins/tpm' 
set -g @plugin 'tmux-plugins/tmux-sensible' 
set -g @plugin 'tmux-plugins/tmux-logging' 
set -g history-limit 50000
# Initialize TMUX plugin manager (keep at bottom) 
run '~/.tmux/plugins/tpm/tpm'
EOF
tmux source ~/.tmux.conf
```

- [ ] Nmap scanning
- [ ] exploit everything


