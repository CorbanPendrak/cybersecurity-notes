#programming 
[[C MOC]]
-- --

Arrays are created by a `[]` after the variable name and with `{}`. All items in the array must be the stated type. The array is restricted to the size when created.

Arrays can specifically define the size in the `[]` or automatically.

Items in the array can be retrieved and changed using their index, but not appended, since the array is restricted in size..

```C
#include <stdio.h>

int main() {
	int nums[5] = {2, 4, 6, 8, 10};
	printf("Array item at index 3: %d\n", nums[3]);
	// Array item at index 3: 8
	nums[3] = 1337;
	printf("Array item at index 3: %d\n", nums[3]);
	// Array item at index 3: 1337

	return 0;
}
```

# Multidimensional Arrays

Arrays can include arrays.

```C
#include<stdio.h>

int main() {
   int grid[3][2] = {{17, 50}, {34, 12}, {25, 19}};
   printf("Row 2, Col 1: %d", grid[1][0]);

   return 0;
}
```
