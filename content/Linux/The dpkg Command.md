#command #terminal 
[[Linux Commands MOC]]
- - -

The `dpkg` command installs packages generated for a Debian-based distribution, like Ubuntu, which end in `.deb`.

# Usage

`dpkg`

```shell
$ sudo dpkg -i /home/user/cowsay.deb 
```

## Important Flags

- `-i <package_location>`: Install package
- `-l`: List installed packages
- `-r <package_name>`: Remove package