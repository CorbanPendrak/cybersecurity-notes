#linux #superuser #terminal 
[[The Linux Environment MOC]]
- - -
The superuser account has complete control over the operating system, typically called root.

In addition to security concerns, using the root account can break the OS accidentally. 

## su

su can be used to "switch user" to root with password: `su root` 

## sudo

sudo runs a single command as superuser and requires the normal account password rather than the root password. 

Some distributions remove the root passoword to enforce the use of 'sudo'