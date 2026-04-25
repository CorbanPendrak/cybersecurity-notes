#programming 
[[C MOC]]
-- --

Pointers hold the memory address of another variable for pointing.

# Memory

## Stack Memory

Stack memory is structed and used for programs containing local variables

## Heap Memory

Heap memory is unstructured data and slower to access but size independent.

# Creating Pointers

Pointers are created with a `*` before the variable name. Data is set in a pointer with the `&` before the variable name. The value of the pointer can be given with the `*` in front of the variable name.

```C
#include <stdio.h>

int main() {
   char greeting[] = "Hello";
   char *msg_ptr = &greeting[0];

   printf("Address of greeting:\n%p\n\n", &greeting);
   printf("Address stored in msg_ptr:\n%p\n\n", msg_ptr);
   printf("Character at *msg_ptr: %c\n", *msg_ptr);

   return 0;
}
```

The pointer here points at the first item in the array, `H`. If the pointer was incremented, `msg_ptr++;`, it would point to the next item and beyond the array.  