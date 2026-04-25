#programming 
[[C MOC]]
-- --

C does not have built-in appropriate security measures for user input.

User input longer than allowed is still written into the memory, leading to the program crashing, or the buffer overflow exploit.

Arguments can be received by adding parameters to the `main` function, but includes the program name:
```C
#include <stdio.h>

int main(int argc, char *argv[]) {
    int i;
    for (i = 0; i < argc; i++) {
        printf("Arg %d: %s\n", i, argv[i]);
    }

    return(0);
}
```
