---
tags:
  - hardware
  - programming
MOC: "[[Hardware MOC]]"
---
GDB is the GNU debugger, which is useful for examining binary applications, exploit development, and reverse engineering compiled programs. To set Intel syntax, add set disassembly-flavor intel to ~/.gdbinit. 

A breakpoint pauses execution at a point in the program, like `break *_start`, while the program can be run with `run`. `disas _start` will disassemble the code to see what will run next. `info registers` shows the state of all the registers. `nexti` will run the next instruction. To examine the stack, run `x/x $esp` which displays the value at the esp register in hexadecimal, which points to the top of the stack. To view n number of values, change it to `x/<n>x $esp`. `x/i` can examine the value as a instruction, and `x/s` examines it as a string.

# pwndbg

The extension pwndbg helps make GDB more user-friendly with extra functionality.

```Shell
sudo apt install git
git clone https://github.com/pwndbg/pwndbg
cd pwndbg
./setup.sh
```

## Example

With unknown compiled program:
```C
// Compile with gcc -m32 -o password password.c

#include <stdio.h>
#include <string.h>

int main() {
    char *password = "ThisIsMyPassword\n";
    char input[151];

    puts("Please enter the password:");
    fgets(input, 149, stdin);

    if (strcmp(input, password) == 0) {
        puts("Success!");
    } else {
        puts("Fail!");
    }

    return(0);
}
```

Run using `{shell icon}gdb ./password`.

```gdb
pwndbg> run 
pwndbg> info functions
pwndbg> break *main
pwndbg> run
pwndbh> next
pwndbg> x/2s 0x565556d0
```

`step` and `next` run the next instruction, but while `step` will enter a function that is called, `next` will only execute the function.