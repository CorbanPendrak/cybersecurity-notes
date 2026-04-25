#programming 
[[C MOC]]
-- --

C can store data in an environment variable.

Get all environment variables:
```C
#include <stdio.h>

extern char **environ;

int main() {
    int i = 0;
    while(environ[i]) {
        printf("%s\n", environ[i++]);
    }

    return 0;
}
```

# getenv

The `stdlib.h` library can get specific environment variables:

```C
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("USER: %s\n", getenv("USER"));
    printf("PATH: %s\n", getenv("PATH"));
    printf("HOME: %s\n", getenv("HOME"));
    printf("ROOT: %s\n", getenv("ROOT"));
    printf("LANGUAGE: %s\n", getenv("LANGUAGE"));
    printf("PWD: %s\n", getenv("PWD"));
    printf("SHELL: %s\n", getenv("SHELL"));
    printf("COLORTERM: %s\n", getenv("COLORTERM"));

    return 0;
}
```

# putenv and setenv

`putenv` sets environment variables in the form of `putenv("MYVAL=great")`.

`setenv` sets environment variables in the form of `setenv("MYVAL", "great")` and can overwrite variables

# unsetenv and clearenv

`clearenv()` removes all environment variables.

`unsetenv('MYVAL')` removes specific environment variables