#programming 
[[C MOC]]
-- --

Running a compiled program requires compiling the text first.

# GCC

`gcc` is the most common compiler on Linux. This is how to compile `hello-world.c` using `gcc`.

```shell
$ gcc -o hello-world hello-world.c
$ chmod +x hello-world
$ ./hello-world
Hello World!
```

To compile for a 32-bit processor:
```Shell
$ gcc -m32 -o hello hello.c
```