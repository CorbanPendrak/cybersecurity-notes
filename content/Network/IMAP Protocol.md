---
MOC:
  - "[[Network MOC]]"
---
---

The Internet Message Access Protocol (IMAP) solves many of the problems of the [[POP3 Protocol]] by saving emails on server until deleted and tracking email state. This protocol is much easier for multiple devices and server-side searches. Unlike the [[SMTP Protocol]], IMAP retrieves emails. This typically uses port 143 and 993.

```shell
openssl s_client -connect <IP>:pop3s
openssl s_client -connect <IP>:imaps
```

# Commands

| Command                       | Description                       |
| ----------------------------- | --------------------------------- |
| `LOGIN <USERNAME> <PASSWORD>` | Login                             |
| `LIST "" *`                   | List all mailboxes                |
| `CREATE "<NAME>"`             | Create mailbox                    |
| `DELETE "<NAME>"`             | Delete mailbox                    |
| `RENAME "<NAME1>" "<NAME2>"`  | Rename mailbox                    |
| `LSUB "" *`                   | List subscribed mailboxes         |
| `SELECT <NAME>`               | Select mailbox for access         |
| `UNSELECT <NAME>`             | Exit mailbox                      |
| `FETCH <ID> all`              | Get data for message in mailbox   |
| `FETCH <ID> body[]`           | Get body text of mailbox          |
| `CLOSE`                       | Remove messages with Deleted flag |
| `LOGOUT`                      | Close connection                  |
