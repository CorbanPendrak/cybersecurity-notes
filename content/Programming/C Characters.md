#programming 
[[C MOC]]
-- --

C stores strings of characters as bytes in the char [[C Types|data type]].

```C
#include <stdio.h>

int main() {
	char sentence[] = "My first variable";
	puts(sentence);
	
	char letter = 'M'
	printf("Character %c is decimal %d\n", letter, letter);
	// Prints: "Character M is decimal 77"

	return(0);
}
```

The variable `sentence` is declared as an array by the `[]`.  

# The Null Terminator

The null terminator, `\0`, is added automatically to character arrays and signifies the end of the array. It should be added when creating the character array directly, otherwise it reads adjacent memory.

```C
#include <stdio.h>

int main() {
	char hello_pieces[6] = {'H', 'e', 'l', 'l', 'o', '\0'}
	puts(hello_pieces);
	return(0);
}
```

# String Handling

The `string.h` library is very common for editing strings.

```C
#include <stdio.h>
#include <string.h>

int main()
{
    char str1[] = "Some text";
    char str2[] = "";
    printf("str1 is %ld characters long\n", sizeof(str1));

    // Using functions from string.h
    printf("str1 is %ld characters long\n", strlen(str1));
    strcpy(str2, str1);
    printf("str2 now has value '%s', the same as str1\n", str2);
    char str3[] = "Joined ";
    char str4[] = "Text";
    strcat(str3, str4);
    printf("Concatenated str4 after str3: %s", str3);

    return 0;
}
```

