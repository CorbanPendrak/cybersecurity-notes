#command #terminal 
[[Linux Commands MOC]]
- - -

The `vim` command is a text editor similar to `nano`. It is more difficult than `nano` but more powerful.

# Usage

`vim <file>`
`i` goes into insert mode for typing

```shell
$ vim new-file-in-vim.txt
```

## Important Subcommands

Go to normal mode (not insert mode) first
- `Esc`, `Ctrl+C`: Normal mode for commands 
- `i`: Insert mode for typing
- `:q`: Quit
- `:q!`: Force quit
- `:wq`, `:x`: Save and quit
- `gUU`: Convert entire line to uppercase
- `ga`, `:as`, `:ascii`: Display ascii character as hex
- `:%!xxd`: Show file in hexadecimal

### Searching
- `/<search_term>`: Search forwards
- `?<search_term>`: Search backwards
- `n`: Next occurrence
- `\<`: Beginning of word in search term `/\<Linux\>`
- `\>`: End of word in search term `/\<Linux\>`
- `\c`: Ignore case, put after search term `/Linux\c`
- `\C`: Force case, put after search term `/Linux\C`
- `*`: Search forwards for word on cursor
- `#`: Search backwards for word on cursor
- `\%x`: Search by hex code `/\%x61`

### Visual Mode
- `v`: Visual mode for highlighting
- `u`: Switch highlight to lowercase
- `U`: Switch highlight to uppercase
- `~`: Swap all case in highlight