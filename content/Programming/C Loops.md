#programming 
[[C MOC]]
-- --

# While

`while` loops keep looping until a condition is met or the loop broken:

```C
#include <stdio.h>

int main() {
	int n = 10;
	puts("Starting countdown...");
	while (n > 0) {
		printf("%d...", n);
		n--;
		if (n == 2) {
			puts("Aborted!");
			break;
		}
	}
}
```

`break` can break the loop and `continue` starts the next execution of the loop.

# For

The `for` loop has an initialization, a condition, and an increment separated with `;`.

```C
#include <stdio.h>

int main() {
    puts("Starting countdown...");
    for (int n = 10; n > 0; n--) {
        if (n == 2) {
            puts("Aborted!");
            break;
        }
        if (n % 2 == 0) {
            printf("!... ");
            continue;
        }
        printf("%d... ", n);
    }
    printf("%s", "\n");

    return(0);
}
```

# Do

The `do` loop defines the condition after the code block so that the code is run at least once, regardless of the condition.

```C
#include <stdio.h>

int main() {
    int n = 10;

    puts("Starting countdown...");
    do {
        if (n == 2) {
            printf("Aborted!");
            break;
        }
        if (n % 2 == 0) {
            n--;
            continue;
        }
        printf("%d... ", n);
        n--;
    } while (n > 0);
    printf("%s", "\n");

    return(0);
}
```