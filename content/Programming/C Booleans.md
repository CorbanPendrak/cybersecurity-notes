#programming 
[[C MOC]]
-- --

Booleans are not built-in, but included in the standard library `stdbool.h` and print as `1` or `0`.

```C
#include <stdio.h>
#include <stdbool.h>

int main() {
	bool fun = true;
	bool evil = false;

	printf("Fun: %d, Evil: $d", fun, evil)
	// Fun: 1, Evil: 0

	return 0;
}
```

While it doesn't save space, the `stdbool.h` library can be easily implemented

```C
typedef int bool;
#define true 1
#define false 0
```

```C
typedef enum { false, true } bool;
```
