#command #terminal 
[[Linux Commands MOC]]
- - -

The `find` command can find files on the system by name, date, owner, or permissions.

# Usage

`find <folder> [type flags] <search term>`

```shell
$ ls
onefile threefiles twofiles
$ find . -name onefile
./onefile
$ find . -name "*files"
./threefiles
./twofiles
$ find . -name "*file*"
./threefiles
./onefile
./twofiles
```

## Important Flags

- `-name`: find based on name