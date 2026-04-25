#command #terminal 
[[Linux Commands MOC]]
- - -

The `rpm` file installs `.rpm` packages generated for Fedora-based distributions.

# Usage

`rpm`

```shell
$ rpm -Uvh /home/user/cowsay.rpm
```

## Important Flags

- `-Uvh <package_location>`: Install package
- `-qa`: List installed packages
- `-e <package_name>`: Remove package