#programming 
[[Python MOC]]
-- --

To get the ascii value of a character, use `ord()`, with the reverse as `chr()`. 

The ascii value can be converted with `hex()` or `bin()`.

```Python
memory = "1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100"
data_chunks = memory.split(' ')
text = ''.join(format(int(chunk, 2), 'c') for chunk in data_chunks)
print(text)
```