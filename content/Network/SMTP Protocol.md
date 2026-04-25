---
MOC: "[[Network MOC]]"
---
---

The Simple Mail Transfer Protocol is old, but too widely used to change easily. It is connection-oriented, like the [[TCP Protocol]]. It is commonly used in [[Email Server|email servers]] for sending email or between e-mail servers. By default, it connects over port 25, but new servers also use port 587. 

To protect against spam, the client, through the Mail User Agent (MUA) converts the email into a header and body for the Mail Transfer Agent (MTA) on the server. The Mail Submission Agent (MSA) is a smaller relay server occasionally before the MTA for simple verification. After reaching the appropriate destination server, a Mail Delivery Agent (MDA) rebuilds the email for the recipient. If the relay server, which verifies users, allows all connections, emails can be spoofed or spammed.

While the protocol includes it, by default, SMTP does not return a delivery confirmation. Users are not authenticated to send emails, which prompts [[DomainKeys]] and [[Sender Policy Framework]]. The extended version of SMTP uses TLS after the `EHLO` command with `STARTTLS`

Default [[Nmap]] scripts check possible commands, the `smtp-open-relay` script tests for open relay configurations, and `smtp-enum-users` enumerates users.

# Commands

| Command     | Meaning                                |
| ----------- | -------------------------------------- |
| `EHLO`      | Start session for extended SMTP        |
| `STARTTLS`  | Enable TLS for xxtended SMTP           |
| `MAIL FROM` | Return address                         |
| `RCPT TO`   | Address per recipient                  |
| `DATA`      | Start message text                     |
| `RSET`      | Abort transmission but keep connection |
| `VRFY`      | Check address for user                 |
| `EXPN`      | Check addresses for mailing list       |
| `NOOP`      | Prevent time-out disconnect            |
| `QUIT`      | Stop connection                        |
# Example Email
```
EHLO corbanpendrak.github.io
MAIL FROM: <me@corbanpendrak.github.io>
RCPT TO: <cove@corbanpendrak.github.io>
DATA

From: <me@corbanpendrak.github.io>
To: <cove@corbanpendrak.github.io>
Subject: Hey
Date: Tue, 14 Apr 2026 14:52:43 +0200
Hey there!
.

QUIT
```

# Return Codes

| SMTP Code | Meaning                        |
| --------- | ------------------------------ |
| 220       | SMTP Service Ready             |
| 250       | Requested Action Completed     |
| 421       | Service Unavailable            |
| 450       | User's Mailbox Unavailable     |
| 451       | Recipient's Server Error       |
| 452       | Server Storage Insufficient    |
| 500       | Command Syntax Error           |
| 501       | Command Arguments Syntax Error |
| 503       | Bad Sequence of Commands       |
| 550       | User's Mailbox Unabailable     |
| 551       | Recipient Not Local            |
| 552       | Recipient's Email Full         |
| 554       | Delivery Error                 |
