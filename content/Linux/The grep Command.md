#command #terminal 
[[Linux Commands MOC]]
- - -

The `grep` command searches for text within a given file or output, often with [[Regular Expressions]].  

# Usage

`grep "<search-term>" <file>`

`grep <options> <Regexp> <file>`

```shell
$ grep Fla* flag.txt
Here is your Flag:CorbanIsGreat!
```

## Match Control

| Flag                                 | Description                                            |
| ------------------------------------ | ------------------------------------------------------ |
| `-e <pattern>`, `--regexp=<pattern>` | Use pattern as regular expression                      |
| `-f <file>`, `--file=<file>`         | Takes patterns from file                               |
| `-i`, `--ignore-case`                | Ignores capitalization in given expression             |
| `-v`, `--invert-match`               | Negates pattern                                        |
| `-w`, `--word-regexp`                | Matches input text with spaces/punctuation around word |
| `-x`, `--line-regexp`                | Matches entire line                                    |

## General Output Control

| Flag                            | Description                         |
| ------------------------------- | ----------------------------------- |
| `-c`, `--count`                 | Output count only                   |
| `--color[=WHEN]`                | Colorize (never, always, auto)      |
| `-l`, `--files-with-matches`    | Output names of files only          |
| `-L`, `--files-without-matches` | Output names of files without match |
| `-m <NUM>`, `--max`             |                                     |
