
#programming 
[[C MOC]]
-- --

Most of the commands are all programs and likely written in C. The `system()` method in the `stdlib.h` library allows accessing the terminal.

However, make sure users don't have access to the `system()`.

```C
#include <stdio.h>
#include <stdlib.h>

int main() {
	system("ls");
	return 0;
}
```

# Ephemeral Commands

Each call to `system()` starts over, so changing directory in one command doesn't affect the next command. To run commands consecutively [[Chaining Commands|chain the commands]].

```C
#include <stdio.h>
#include <stdlib.h>

int main() {
	system("cd /"); // Change to home directory
	system("ls"); // Doesn't print home directory

	system("cd / && ls"); // Prints home directory
	system("cd /; ls"); // This also works

	return 0;
}
```

# Launching Programs

C can also launch bigger binaries, like `chrome`.