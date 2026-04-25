#programming 
[[Python MOC]]
-- --

Dictionaries are similar to [[Python Lists and Tuples]], but stores unordered key-value pairs. These use `{}`, like `{'total': 3, "completed": 1}`.

The dictionary uses keys instead of indexes. In the example above, a key would be `'completed'` and used `stats['complted'] -> 1`.

The values of the dictionary can be any type, including dictionaries, but the keys must be unchangeable, like strings or tuples.

# Adding to Dictionaries

```Python
fruits = {"apples": 10, "bananas": 3}
fruits["pineapples"] = 8
```

# Removing from Dictionaries

```Python
fruits = {"apples": 10, "bananas": 3}
del fruits["apples"]
