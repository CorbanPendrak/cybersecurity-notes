---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

`Nmap` is a powerful enumeration tool for auditing, checking configurations, network mapping, identifying open ports, and vulnerability assessment. It can do host discovery, port scanning, service detection, OS detection, and scriptable interaction scans.

```shell
# Full TCP scan
sudo nmap -sS -v -p- -oA full_results <IP>

# Versioning specific ports
sudo nmap -sV -sC -p <Ports,> -oA versioning_results <IP>
```

|                           |                                     |
| ------------------------- | ----------------------------------- |
| `-oA <filename>`          | Save results                        |
| `-sV`                     | Scan versions                       |
| `-sU`                     | UDP scan                            |
| `-sS`                     | TCP partial scan                    |
| `-sT`                     | TCP full scan                       |
| `-sA`                     | ACK scan for firewalls              |
| `-O`                      | OS version scan                     |
| `-v`/`-vv`                | Set verbose level                   |
| `--reason`                | Display reasoning                   |
| `-iL <filename>`          | Scan targets in file                |
| `-T <0-5>`                | Speed/aggression increasing         |
| `--max-retries <retries>` | Number of retries, defaults to 10   |
| `--min-rate <rate>`       | Minimum rate speed when known       |
| `-D RND:<number>`         | Generate random IP source addresses |
| `-e <interface>`          | Use specific interface              |
| `-n`                      | Disable DNS                         |
| `-Pn`                     | Disable ICMP echo                   |
| `--disable-arp-ping`      | Disable ARP ping                    |
| `-S <ip>`                 | Use IP as source                    |
| `--source-port <port>`    | Use port as source                  |
| `--dns-server <ns>`       | Set a specific DNS server           |

# Host Discovery
The `-sn` flag disables port scanning to just check the host. Multiple IPs can be specified with CIDR, a file, or a range.

# Port Scanning
`Nmap` scans the top 1000 TCP ports with SYN scan by default as root or a TCP scan (`-sT`) as user. Specific ports can be set one by one (`-p 80,445`), range (`-p 22-445`), or all ports 

# TCP Scan
The `-sS` TCP-SYN scan is a default and common method that partially completes the SYN-ACK handshake. If the port sends back `SYN-ACK`, the port is open. If the port sends `RST`, the port is closed. If no packet is sent, the port is filtered.

The `-sT` TCP connect scan uses the full handshake to verify the port, but it is not stealthy.

# UDP Scan
Because `-sU` [[UDP Protocol|UDP]] is stateless without an acknowledgment, these scans take longer than TCP scans. 

# Saving Results
Saving the scan results (`-oA <filename>`) allows for later comparison. This saves it in three formats, the typical `Nmap` output (`-oN`), a grepable version (`-oG`), and an XML version (`-oX`). The XML format is useful to generate HTML reports, like with `xsltproc`. 

# Scripting Engine
The Nmap Scripting Engine allows you to create Lua scripts for specific service interactions. The default scripts can be run with `-sC`, and a category can be specified with `--script <category>` from the categories below.

| **Category** | **Description**                      |
| ------------ | ------------------------------------ |
| `auth`       | Authentication                       |
| `broadcast`  | Host discovery                       |
| `brute`      | Brute-forcing credentials            |
| `default`    | Default scripts                      |
| `discovery`  | Open services                        |
| `dos`        | Denial of service vulnerabilities    |
| `exploit`    | Exploiting known vulnerabilities     |
| `external`   | Using external services              |
| `fuzzer`     | Sending different fields             |
| `intrusive`  | Intrusive scripts                    |
| `malware`    | Scanning for some malware            |
| `safe`       | Non-intrusive scripts                |
| `version`    | Further service versioning           |
| `vuln`       | Identifying specific vulnerabilities |
## Useful Scripts

| Script            | Description       |
| ----------------- | ----------------- |
| `smtp-open-relay` | [[SMTP Protocol]] |
| `smtp-enum-users` | [[SMTP Protocol]] |
