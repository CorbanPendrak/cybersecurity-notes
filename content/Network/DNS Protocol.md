---
MOC: "[[Network MOC]]"
---
---
The **Domain Name System** (DNS) translates domain names, like `google.com`, into [[IP addresses]]. 

Every computer requires a [[DNS server]], either by internet service provider, the router, or a DNS server, like Google or OpenDNS. The file in `/etc/hosts` or `C:\Windows\System32\drivers\etc\hosts` manually resolves IPs.

DNS is hierarchical relying on different server for the domains by the [[Top Level Domain]]. In an iterative lookup the DNS server sends the answer or a server that might know and requires the host to continue asking the question. 
# Record Types

| **DNS Record** | **Description**                                                   |
| -------------- | ----------------------------------------------------------------- |
| `A`            | [[IP addresses\|IPv4]] address of domain                          |
| `AAAA`         | [[IP addresses#Version 6\|IPv6]] address of the requested domain. |
| `NS`           | DNS nameservers                                                   |
| `MX`           | Mail servers                                                      |
| `CNAME`        | Alias for another domain name                                     |
| `PTR`          | Reverse lookup                                                    |
| `SOA`          | Admin contact                                                     |
| `TXT`          | Various information                                               |
# DNS Tools
The `dig` command is useful for enumerating DNS. Because some servers block excessive DNS queries, respect rate limits and obtain permission.

```shell
# Lookup DNS <RECORD> type for a <DOMAIN>
dig <DOMAIN> <RECORD> +trace

# Query specific name server at <IP> for <DOMAIN>
dig @<IP> <DOMAIN>

# Reverse lookup on <IP>
dig -x <IP> 
```

## Example
```
$ dig google.com

; <<>> DiG 9.10.6 <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 59238
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1410
;; QUESTION SECTION:
;google.com.			IN	A

;; ANSWER SECTION:
google.com.		300	IN	A	172.217.165.206

;; Query time: 31 msec
;; SERVER: 10.173.40.145#53(10.173.40.145)
;; WHEN: Tue Apr 21 21:26:15 EDT 2026
;; MSG SIZE  rcvd: 55

$ dig +short google.com
172.217.165.206
```

- Header Section
	- Flags
		- Query Response: `qr`
		- Recursion Desired: `rd`
		- Authentic Data: `ad`
- Question Section
	- Asks [[IP addresses|IPv4]] of `google.com`: `;google.com. IN A`
- Answer Section
	- Gives IP and time-to-live (caching): `google.com. 300 IN A 172.217.165.206`
- Footer Section
	- Query time: `31 msec`
	- Server used: `10.173.40.145#53(10.173.40.145)`

# DNS Zone Transfer
If misconfigured, an attempted DNS zone transfer to replicate a [[DNS server]] can reveal all [[Subdomain|subdomains]], [[IP addresses|IPs]], and server records.

```shell
$ dig axfr <DOMAIN>
```