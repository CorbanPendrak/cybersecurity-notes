#programming 
[[C MOC]]
-- --

Variables declared in code are saved to the heap, requiring limits, but data can be put into the heap for varying limits, like user input.

Bytes are allocated with `malloc(<bytes>)` and reallocated with `realloc(<variable>, <bytes>)`.

Memory must be freed with `free(<variable>)` at the end of the program, but can exist outside of the context.

```C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main () {
   char *msg;

   // Initial message added to memory using malloc and strcpy
   msg = (char *) malloc(12);
   strcpy(msg, "Hello there");
   printf("Message: %s\nAddress: %u\n\n", msg, *msg);

   // Updating message in memory using realloc and strcat
   msg = (char *) realloc(msg, 26);
   strcat(msg, " from SANS Foundations");
   printf("Message: %s\nAddress: %u\n\n", msg, *msg);

   // Free up the memory!
   free(msg);

   return(0);
}
```