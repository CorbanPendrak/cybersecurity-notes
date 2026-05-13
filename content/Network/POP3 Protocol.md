---
MOC:
  - "[[Network MOC]]"
---
---

The Post Office Protocol 3 (POP3) stores emails in server until computer syncs with server to save storage on server. This typically uses port 110 and 995. 

Downsides include:
- Losing emails on faulty computer
- Difficult for email on multiple devices

# Commands

| Command           | Description            |
| ----------------- | ---------------------- |
| `USER <USERNAME>` | Login user             |
| `PASS <PASSWORD>` | Login password         |
| `STAT`            | Number of saved emails |
| `LIST`            | List all emails        |
| `RETR <ID>`       | Get email              |
| `DELE <ID>`       | Delete email           |
| `CAPA`            | Display capabilities   |
| `QUIT`            | Close connection       |
