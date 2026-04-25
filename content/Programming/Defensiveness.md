#programming 
[[Programming MOC]]
-- --

The main principle of defensive programming is to plan for the unexpected. Rather than focusing on what happens when things work, it focuses on safety and security.

> A pen tester walks into a bar and orders a beer. Then 2 beers. Then orders 0 beers. Then orders -1 beers. Then orders a lizard. Then orders a \` OR 1=1. Then orders a NULLPTR...

# Assertions

Basic checks for valid data is important. Python has `assert`, which will halt the program on an error.

```Python
def add_two(number1, number2):
	assert isinstance(number1, int), 'Non-integer value passed: ' + number1
	assert isinstance(number2, int), 'Non-integer value passed: ' + number2
	assert number1 >= 0, 'Negative value passed: ' + number1
	assert number2 >= 0, 'Negative value passed: ' + number2
	return number1 + number2
```

# Linting

Unlike formatting, which checks for code layout, linting checks for logical code.

```Python
import mth # Likely math library
import bcrypt # Import never used
import sys

user = 'John'

if 1 == 2 and user == 'John': # 1 == 2 is never passable
    print('Hi John')
else:
    print('Exiting...')
sys.exit() # Likely supposed to be indented

print('The end') # Code never reached
```