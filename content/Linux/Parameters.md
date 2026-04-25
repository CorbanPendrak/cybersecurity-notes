#terminal 
[[Linux Navigation MOC]]
- - -

Parameters give different options to the command. Some commands take only a long form or short form, sometimes both, depending on the creator.

# Single Letter Parameters

Single letter parameters, like `ls -a`, use a single `-`. To combine multiple parameters, chain them behind the single dash, `ls -al`, or use a new dash for each, `ls -a -l`.

# Full word Parameters

The longer form requires `--` before the flag, like `ls --all`.

# Help

Searching the web can show the parameters, but most commands include a built-in help page, accessible with `-h` or `--help`. 

Most tools also include a manual page which can be viewed with `man`: `man ls`. The manual page normally gives full listing, rather than limited breakdown of `--help` page.