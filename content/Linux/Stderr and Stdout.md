#terminal #linux 
[[Linux Commands MOC]]
- - -

For most commands it is possible to separate stdout and stderr by piping.

Errors are `2` and can be piped with `2> errors.txt` or just `2>/dev/null`.

Stdout is typically `1` and can be piped with `1>results.txt`.

`find / -name "passwd 1>results.txt 2>errors.txt`
