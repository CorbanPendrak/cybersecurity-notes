#command #terminal 
[[Linux Commands MOC]]
- - -

`file` tells the filetype of a file instead of relying on the file name extension.

# Usage

`file <file>`

```shell
$ file unknownfile
unknownfile: Zip archive data, at least v1.0 to extract
$ file /usr/bin/ls
/usr/bin/ls: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=897f49cafa98c11d63e619e7e40352f855249c13, for GNU/Linux 3.2.0, stripped
```

## Important Flags

- 