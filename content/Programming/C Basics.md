#programming 
[[C MOC]]
-- --

Commands in C end with a `;`.

Functions use a code block enclosed by `{}`, so indentation and new lines do not matter.
# Main Function

C's main entry point for a program is the `main` function. Returning a `0` means the function finished successfully, but a higher number refers to a specific error.

```C
int main() {
	return(0);
}
```
# Importing Libraries

Libraries are imported with `#include`:

```C
#include <stdio.h>

int main() {
	puts("Hello, World!");
	return(0);
}
```
# Printing

## Using puts()

The standard input output [[C Basics#Importing Libraries|library]] `stdio.h` is very common.

```C
#include <stdio.h>

int main() {
	puts("Hello, World!");
	return(0);
}
```

## Using printf()

`printf()` is another method in `stdio.h` for formatting. Unlike `puts()`, it does not output with a `\n` new line character.

- `%s`: String
- `%c`: Character
- `%d`: Integer
- `%f`: Float
	- `%.2f`: Two decimal precision
- `%u`:  Unsigned
- `%lf`: Double 
- `%o`: Octal
- `%x`: Hexadecimal
- `%p`: Pointer

```C
#include <stdio.h>

int main() {
    puts("One.");
    puts("Two.");
    printf("%s", "Three.");
    printf("%s", "Four.");
    return(0);
}
/* Output:
One.
Two.
Three.Four.
```

# Comments

```C
/*
This is a simple C program that uses stdio.h to output some text.
*/
#include <stdio.h

// Entrypoint, strictly typed
int main() {
	puts("Hello World") // One way to output content
	return(0); // return 0 to indicate success
}
```

## Single Line Comments

C uses `//` for comments, which are ignored when compiling.

## Multi-line Comments

Multi-line Comments use `/*` and `*/` delimiters