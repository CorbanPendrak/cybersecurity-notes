---
MOC: "[[Network MOC]]"
---
-- --
The **Network File System** protocol is similar to [[SMB Protocol|SMB]], and commonly used between Unix systems. Version 4 requires password authentication and standardizes [[UDP Protocol|UDP]] or [[TCP Protocol|TCP]] port 2049, and port 111. Since authentication uses UID/GIDs and the server/client may not have the same mapping, this protocol should only be used on trusted networks.

```shell
showmount -e <ip>
mkdir nfs-mount
sudo mount -t nfs <ip>:/ ./nfs-mount/ -o nolock
```