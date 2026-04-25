---
MOC: "[[Network MOC]]"
---
-- --

The **Simple Network Management Protocol** (SNMP) monitors network devices. It uses [[UDP Protocol|UDP]] port 161 and traps over UDP port 162. A trap is automatically sent to the client without request.

A **Management Information Base** (MIB) is a text file containing [object identifiers](https://www.alvestrand.no/objectid/) and other information, written in Abstract Syntax Notation One format. 

Version 1 has no built in authentication, version 2 is community based, and version 3 includes encryption and authentication. 

# Enumeration
Tools like `snmpwalk`, `onesixtyone`, and `braa` can be used to brute-force the community strings/passwords. A common community string is `public`.

```shell
snmpwalk -v2c -c <COMMUNITY_STRING> <IP>
onesixtyone -c
braa <COMMUNITY_STRING>@<IP>:.1.3.6.*
```