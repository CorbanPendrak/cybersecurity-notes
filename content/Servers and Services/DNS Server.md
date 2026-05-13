---
MOC: "[[Servers and Services MOC]]"
---
-- --

DNS servers use the [[DNS protocol]] to translate domain names into numeric IP addresses. Bind9 and dnsmasq are common DNS servers.

Creating a DNS server, instead of relying on the ISP, allows access to specific sites commonly blocked and is much faster than other major providers. DNS traffic is not encrypted, however, and can still be viewed. 
![[dns-diagram.png]]
# Recursive Resolver
This server type receives and handles client queries from applications.
# Root Nameserver
This server type is the first call for the resolver and redirects it to the TLD nameserver.
# Top Level Domain Sameserver
The TLD nameserver responds to the resolver with the IP address of the domain's authoritative nameserver, differentiated by ending, like `.com` and `.org`.
# Authoritative Nameserver
The authoritative nameserver responds with the specific IP address of the origin server for the domain name to pass to the resolver to pass to the client.
