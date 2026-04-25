#network 
[[Network MOC]]
- - -

A subnet splits a network into sections. The IP address contains the network identifier and the host identifier. The subnet mask determines the size of the host identifier.

For example, the IPv4 address `192.168.0.1` with the subnet `255.255.0.0` has the first two bytes (`192.168`) as the network identifier and the rest as the host identifier (`0.1`), allowing  for $2^{16}$ or $65,536$ computers. Using a subnet mask of `255.0.0.0` allows for $2^{24}$ or $16,777,216$ computers.

# Classless Inter-Domain Routing (CIDR

This is a shorthand for the subnet mask. The network `192.168.0.0` with subnet `255.255.0.0` is written `192.168.0.0/16`, with the `/16` representing the 2 bytes/ 16 bits of the mask.  