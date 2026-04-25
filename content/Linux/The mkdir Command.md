#command #terminal 
[[Linux Commands MOC]]
- - -

The `mkdir` command creates directories.

# Usage

`mkdir <path of folder to create>`

```shell
$ ls
flag.txt
$ mkdir mynewfolder
$ ls
mynewfolder flag.txt
```

## Multiple Folders

```shell
$ ls
mynewfolder flag.txt
$ mkdir -p afolder/asecondfolder/athirdfolder
$ ls
afolder mynewfolder flag.txt
$ ls afolder
asecondfolder
$ ls afolder/asecondfolder
athirdfolder
```