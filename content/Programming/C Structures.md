#programming 
[[C MOC]]
-- --

Structures organize varying data types like classes in Python.

```C
#include <stdio.h>

struct User {
    char *name;
    int age;
};

int main()
{
    struct User account_1;
    account_1.name = "John Smith";
    account_1.age = 54;

    struct User account_2;
    account_2.name = "Susan Doyle";
    account_2.age = 27;

    printf("Account 1, %s is %d years old\n", account_1.name, account_1.age);
    printf("Account 2, %s is %d years old\n", account_2.name, account_2.age);

    return 0;
}
```

# Using Typedef

`typdef` allows for shorter code by defining the structure as an available data type.

```C
#include <stdio.h>

typedef struct {
    char *name;
    int age;
} User;

int main()
{
    User account_1;
    account_1.name = "John Smith";
    account_1.age = 54;

    printf("Account 1, %s is %d years old\n", account_1.name, account_1.age);

    return 0;
}
```