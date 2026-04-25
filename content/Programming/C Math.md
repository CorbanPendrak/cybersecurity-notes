#programming 
[[C MOC]]
-- --

C has many simple math operations built into the language, but the `math.h` library offers more functions.

```C
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    printf("%.0f\n", sqrt(81));      // square root    9
    printf("%.0f\n", pow(6, 3));     // power          216
    printf("%.0f\n", ceil(12.34));   // ceiling        13
    printf("%.0f\n", floor(12.34));  // floor          12
    printf("%d\n", abs(-12));        // absolute       12.000000
    printf("%lf\n", cos(43.21));     // floor          0.716310
    printf("%lf\n", sin(43.21));     // ceiling        -0.697783
    printf("%lf\n\n", tan(43.21));   // ceiling        -0.974135

    printf("%lf\n", M_PI);           // pi             3.141593
    printf("%lf\n", M_SQRT2);        // sqrt(2)        1.414214
    printf("%lf\n", M_E);            // e              2.718282
    printf("%lf\n", M_LOG2E);        // log2 e         1.442695

    return(0);
}
```