#network 
[[Network MOC]]
- - -

IP addresses identifies computers per NIC. 

# Usage 

## Private

Assigned to computer on local network, fall within certain ranges and only accessible on same LAN. The private address is only necessary with IPv4.

The reserved address space:
- `10.0.0.0/8`
- `172.16.0.0/12`
- `192.168.0.0/16`
## Public

Internet facing, typically a single address for an entire LAN. Networks use Network Address Translation (NAT) to convert private addresses into a single public address for communication between networks.

# Protocol Version

## Version 4

Version 4 is the most common and written in the format of xxx.xxx.xxx.xxx like 192.168.1.26 made of 4 bytes. The problem with this version is the limited number of available addresses.

The `127.0.0.1` address points to current computer as the localhost.
## Version 6

Version 6 is much more complicated than version 4, which is why there is resistance for switching to version 6. These addresses are 16 bytes long, giving $2^{128}$ or $3.4 \times 10^{38}$ possibilities, which is more than enough for every atom on the surface of the earth. 

Without shortening rules an IPv6 address looks like `2001:0db8:0000:0000:0000:ff00:0042:8329` and with shortening rules: `2001:db8::ff00:42:8329`

The local host of IPv6 is `::1`. 

# Managing

The Dynamic Host Configuration Protocol (DHCP) manages IP addresses to avoid conflicts and simplify network joining. 