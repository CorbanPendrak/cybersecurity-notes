---
tags:
  - offensive
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

On [[Windows MOC]], the Administrator can do almost everything. The SYSTEM user can do anything, but a user cannot run as it. The best way to bypass UAC is simply ask the user for permission. 

Some files store passwords:
- C:\unattend.xml
- C:\Windows\System32\
- C:\Windows\System32\sysprep\
- C:\sysprep.inf
- C:\sysprep\sysprep.xml
- C:\Windows\Panther\
- C:\Windows\Panther\Unattend\

Services that are missing quotes can be exploited using a malicious executable.