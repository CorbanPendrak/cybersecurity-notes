---
tags:
  - red
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Hashcat helps reverse hashes for passwords, like those taken during [[Forensics]] or from `/etc/shadow`. 

Hashcat can be used to identify the hash type without cracking the hashes with `hashcat <hashes_file> --identify`. For subsequent attacks, the type can be identified with `-m <id>` using the id found from identification in the table. 

The `-a 0` performs a straight attack using hashes from a wordlist, `hashcat -a 0 -m 1500 <hashes_file> <wordlist>`.

The cracked-password status can be viewed without rerunning the commands using `hashcat -m <hash_id> <hashes_file> --show`. To view accompanying usernames, add `--user`. To show upcoming hashes and progress, switch `--show` with `--left`. 

Masks help try permutations of passwords. This uses `-a 3` with the mask using the table below, `hashcat -a 3 <hash_file> ?u?l?l?l?l?l?l?l?l?d.

| Permutation | Available Characters                 |
| ----------- | ------------------------------------ |
| `?l`        | a-z                                  |
| `?u`        | A-Z                                  |
| `?d`        | 0-9                                  |
| `?s`        | !"#$%&'()\*+,-,/:;<=>?@\[]^\_\`{\|}- |
| `?a`        | `?l?u?d?s`                           |
| `?b`        | 0x00-0xff                            |

A rules file defines permutations for a wordlist with the `-r <rules_file>` on the `-a 0` straight attack. Many rules are available in `/opt/hashcat/rules`. 