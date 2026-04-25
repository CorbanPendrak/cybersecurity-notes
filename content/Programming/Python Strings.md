#programming 
[[Python MOC]]
-- --

Strings are series of characters of any length. In Python, strings are encapsulated in `' '` or `" "`. Since either quotes work, they can encapsulate the other: `'"Hello!" I shout'`.

# Escaping

Add a `\` before the character to escape it.
- `"\\"` -> `\`
- `"\""` -> `"`
- `"\t"` -> tab
- `"\n"` -> newline

# Concatenate

Combining multiple strings is done with `+`.

# Formatting

While strings can be formatted with concatenation, argument specifiers, format method, f-strings can help.

## Argument Specifiers

This method is similar to C's formatting and uses placeholders like `%s`.
- `%s`: String
- `%d`: [[Python Numbers#Integers|Integer]]
- `%f`: [[Python Numbers#Floats|Float]]
	- `%.2f`: Round to 2 decimal places
- `%x`: Hexadecimal
- `%o`: Octal

```python
first_name = "Corban"
last_name = "Pendrak"
print("My name is %s %s" % (last_name, first_name))
```

## Format Method

The format method can reuse data in specifiers' list.

```python
first_name = "Corban"
last_name = "Pendrak"
print("My name is {0}, {0} {1}".format(first_name, last_name))
print("My name is {first}, {first} {last}".format(first=first_name, last=last_name))
```

## F-Strings

F-strings are only in Python version 3 (and up) and are strings with `f` in front. These allow for the best of both methods for readability.

```python
first_name = "Corban"
last_name = "Pendrak"
print(f"My name is {first_name} {last_name}")
```
# Methods

- `lstrip()`: Strip whitespace from left side
- `rstrip()`: Strip whitespace from right side
- `strip()`: Strip whitespace from both sides
- `format()`: Format string