---
MOC: "[[Network MOC]]"
---

- - -

The Internet Control Message Protocol (ICMP) transmits error messages and operational information on network. It doesn't send data and is almost exclusively used by routers.

Each packet has a type and code. Ping to determine if a host is available uses ICMP type 8 code 0, the echo request packet. The echo response packet is ICMP type 0 code 0. 

# Common Packets

Type, Code
- 8, 0: Echo request
- 0, 0: Echo response
- 11, 0: Time exceeded