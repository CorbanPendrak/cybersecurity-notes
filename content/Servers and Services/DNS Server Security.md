---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
Parent: "[[DNS Server]]"
---
-- --

A [[DNS Server]] does not encrypt data by default.

# Over TLS

DNS over TLS, DoT, encrypts DNS with TLS using [[UDP Protocol|UDP]]. This uses port 853 and is self-evident that it is encrypted but is blocked by some companies.

# Over HTTPS

DoH sends queries using [[HTTP Protocol|HTTPS]]. This uses port 443 which cannot be blocked by network administrators.

# DNSSEC

The DNS Security Extensions is a security protocol for protecting DNS availability, integrity, and authenticity. 

This method involves secure validation at each step of resolution and often incorporates [[DNS Server#Over TLS|DoT]] or [[DNS Server#Over HTTPS|DoH]]. 