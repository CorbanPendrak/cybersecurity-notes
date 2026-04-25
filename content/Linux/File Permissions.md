#linux #file-system 
[[The Linux Environment MOC]]
- - -
Each file and folder is owned by a user and a group. `-rw-r--r-- 1 corban www-data 20 Sep 26 09:58 permissions_example` has user "corban" and group "www-data"

There are three permission modes:
- **r**: Read
- **w**: Write
- **x**: Execute 

The first part of `-rwxrw-r-- 1 corban www-data 20 Sep 26 09:58 permissions_example` shows the permissions in directory(1)-user(3)-group(3)-others(3). So, `permissions_example` is not a directory, the user ("corban") can read, write, and execute, the group ("www-data") can read and write, and everyone else can only read it.

## Setting File Permissions

### Change owner
`chown <new_owner> <file>` "changes owner" to `new_owner` for `file`
`chgrp <new_group> <file>` "changes group " to `new_group` for `file`

### Change permissions
`chmod <num> <file>` changes permissions for `file` according to `num` where `num` is a 3 digit number calculated from Read = 4, Write = 2, and Execute = 1 per category
Ex. 512 = `r-x--x-w-`