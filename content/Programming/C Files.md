#programming 
[[C MOC]]
-- --

Reading files is almost identical to reading the command line, except the file handler is opened with `fopen` and closed with `fclose`.

```C
#include <stdio.h>
#include <string.h>

int main() {
    char data[20];
    FILE *file = fopen("test.txt", "r");

    fgets(data, sizeof data, file);
    if (strlen(data) > 0){
        if (data[strlen(data) - 1] != '\n') {
            data[strlen(data) - 1] = '\n';
        }
    }
    printf("The file contains: \n%s", data);
        fclose(file);

    return(0);
}
```

# File Permissions

Files need to be opened with explicit permissions. 

| Character | Permission               |
| --------- | ------------------------ |
| r         | Read                     |
| w         | Write                    |
| a         | Append                   |
| b         | Binary (with r, w, or a) |

# fscanf

`fscanf()` reads bytes until a whitespace character and formats each chunk, unlike `fgets()`, which reads to a `\n`.

```C
/*
Reads hexadecimal data from file.
*/
#include <stdio.h>

int main() {
	FILE *fp = fopen("message.txt", "r");
	char buff[2];
	while (fscanf(fp, "%hhx", buff) != EOF){
		printf("%s", buff);
	}
	fclose(fp);
}
```

# fseek

The `fseek(<file>, <offset>, <origin>)` reads bytes at specific positions. The origin is the position to begin the offset from.

| Origin   | Location                         |
| -------- | -------------------------------- |
| SEEK_SET | Start of file                    |
| SEEK_CUR | Current position of file pointer |
| SEEK_END | End of file                      |

```C
#include <stdio.h>

int main() {
    FILE *fp = fopen("message.txt", "r");
    char buff[2];

    printf("File pointer at byte %ld\n", ftell(fp));
    fseek(fp, 50, SEEK_SET);
    printf("File pointer at byte %ld\n", ftell(fp));

    for (int i = 0; i < 14; i++) {
        fscanf(fp, "%hhx", buff);
        printf("%d: %s ", i, buff);
    }

    printf("\nFile pointer at byte %ld\n", ftell(fp));
    rewind(fp); // Point file pointer at beginning again
    printf("File pointer at byte %ld\n", ftell(fp));
    fclose(fp);

    return 0;
}
```