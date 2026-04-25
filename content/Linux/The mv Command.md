#command #terminal 
[[Linux Commands MOC]]
- - - 

The `mv` command moves or renames files and folders, removing the original. Since there is no rename command, renaming is done by moving the file to the same location with the new name.

# Usage

```shell
$ ls
flag.txt firstFolder
$ mv flag.txt firstFolder/flag.txt
$ ls firstFolder/
flag.txt
$ ls
firstFolder
```

## Important Flags

- `-n`, `--no-clobber` prevents the move from overwriting a file that already exists.
- `-u` only overwrites if timestamp on current file is newer

