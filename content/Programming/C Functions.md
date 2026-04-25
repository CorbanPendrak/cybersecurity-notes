#programming 
[[C MOC]]
-- --

Functions in C require the return value of the function. `void` indicates nothing is returned. 

Variables defined in functions have local scope, so changes are only reflected in the function.

```C
#include <stdio.h>

void add5(int n) {
    n += 5;
    printf("%d\n", n);
}

int main() {
    int num = 0;

    add5(num);                 // 5
    printf("%d\n", num);       // 0
    add5(num);                 // 5
    printf("%d\n", num);       // 0
    num += 2;
    printf("%d\n", num);       // 2
    add5(num);                 // 7
    printf("%d\n", num);       // 2

    return(0);
}
```

# Arguments by Reference

Values passed into a function are copies, to affect the original values, pass pointers.

```C
#include <stdio.h>

void add5(int *n) {
    *n += 5;
    printf("%d\n", *n);
}

int main() {
    int num = 0;

    add5(&num);               // 5
    printf("%d\n", num);      // 5
    add5(&num);               // 10
    printf("%d\n", num);      // 10
    num += 2;
    printf("%d\n", num);      // 12
    add5(&num);               // 17
    printf("%d\n", num);      // 17

    return(0);
}
```

# Function Pointers

Pointers can even point to functions.

```C
#include <stdio.h>

void say_hello() {
    puts("Hello from the function");
}

int main() {
    void (*pf)();
    pf = &say_hello;
    pf();

    return(0);
}
```