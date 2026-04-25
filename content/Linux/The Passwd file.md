#linux 
[[Linux Architecture and Components MOC]]
- - -

The `/etc/passwd` file is an important file that stores information about what user accounts exist on the system. Each account password hash is stored in a shadow file, `/etc/shadow`, replaced by an 'x' in the `passwd` file.

The `/etc/passwd` file is available for every account while the `/etc/shadow` is only available for the root user.