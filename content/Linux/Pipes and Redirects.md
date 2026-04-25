#terminal 
[[Linux Architecture and Components MOC]]
- - -

# Pipes

Pipes combine programs for more functionality.

## Scroll through all processes

```shell
$ ps auxf | less
```

## Search for process

```shell
$ ps aux | grep bash | grep -v grep | less
```

# Redirects

Redirects output a command to a file instead of another command like a pipe. 

Using `>` overwrites the file while `>>` appends the information to the file.

```shell
$ ls
$ echo "hello one!" > afile; ls
afile
$ cat afile
hello one!
$ echo "hello two!" > afile; cat afile
hello two!
$ echo "hello three!" >> afile; cat afile
hello two!
hello three!
```

# Chaining

[[Chaining Commands|Chaining commands]] runs the programs consecutively and individually.
