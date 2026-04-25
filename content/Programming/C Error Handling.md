#programming 
[[C MOC]]
-- --

There are no exceptions in C and must be accounted for.  

```C
#include <stdio.h>
#include <time.h>
#include <string.h>

int main() {
    FILE *file;
    if (!(file = fopen("config.txt", "r"))) {
        file = fopen("errors.log", "a");
        time_t timestamp = time(NULL);
        fprintf(file, "%s : config.txt doesn't exist\n", strtok(ctime(&timestamp), "\n"));
        fprintf(stderr, "Error executing program, check errors.log");
        fclose(file);
        return 1;
    }

    // Make use of config file here...

    fclose(file);

    return 0;
}
```