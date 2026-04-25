#command #terminal 
[[Linux Commands MOC]]
- - -

The cp command is short for 'copy' and can copy a file to a new location without modifying the original.

# Usage

`cp <file to copy> <name of new copy>`

```shell
$ ls
myfile
$ cp myfile mycopiedfile
$ ls
mycopiedfile myfile
```

The full path of the file can also be given instead of just the name.
# Copy Folders

Copying folders requires the `-r` or `-R` flag, meaning 'recursive'.

```shell
$ ls
myfolder
$ cp myfolder mycopiedfolder
cp: -r not specified; omitting directory 'myfolder'
$ cp -r myfolder mycopiedfolder
$ ls
mycopiedfolder myfolder
```
