#command #terminal 
[[Linux Commands MOC]]
- - -

The `less` command is useful for viewing and searching long files by not loading the entire file into memory at once.

# Usage

`less <file>`

Opens an interactive program with scrolling. 
- `q`: exits program
- `SPACE`: next page
- `<num>p`: percentage of file (`50p` is halfway)
- `<num>g`: line number (`5g` is line 5)
- `/<search term>`: search for term in file
	- `n`: next search match
## Important Flags

- 