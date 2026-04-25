---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
---
-- --

An email server sends and receives email using email protocols. [[SMTP Protocol]] typically deals with outgoing messages and [[IMAP Protocol]] or [[POP3 Protocol]] with incoming mail. [[MIME Protocol]] sends non ASCII data. Most email servers are provided via cloud services, limiting policy capabilities. 

When an email is sent, the contents are first encoded and packaged with the header. Then, the recipient's domain is queried and validated, where it appears in the recipient's mailbox.  
A spam filter is generally proprietary and can examine the IP reputation data, header fields, reported attacks, attachments, and content for suspicious elements.

# Email Spoofing

SMTP has no form of authentication, so the sender form can be manipulated.

## SPF

The Sender Policy Framework checks domain name by DNS list. This is useful for small organizations, but not for outsourcing to Google and using `@gmail.com`.

## DKIM

Domain Keys Identified Mail uses asymmetric encryption to encrypt sender and receiver.