#programming 
[[Python MOC]]
-- --

Lists and tuples store multiple items, which don't need to be the same data type, according to an order.

Both return individual items according to the index position using `fruits[1]`. The index starts at 0, not 1.

The length of the group is found with `len()`.

# Lists

Lists are changeable, and are set using the index position. They use `[]` like `["apple", "pineapple"]`.

```Python
fruit = ["apple", "banana", "pear"]
fruit[2] = "pineapple"
print(fruit) # ["apple", "banana", "pineapple"]
```

`.sort()` and `.reverse()` work alphabetically.

Items can be added to lists using `.append(item|list)`

## Removing Items

Items can be removed with `.remove(item)`. `.pop()` removes and returns the last item.

# Tuples

Tuples are unchanging and must be changed entirely to change the values, useful for keeping the original intact. They use `()` like `("apple", "pineapple")`.