#terminal #linux 
[[The Linux Environment MOC]]
- - -

Environment variables show data stored in terminal by multiple programs and are prefixed with a `$`, like `$HOME`.

# Showing Environment Variables

Single variables can be printed with `echo`.

```shell
echo $HOME
> /home/corban
```

Display all environment variables with `printenv`.
# Editing Environment Variables

Use `export`:

```shell
export HOME=/tmp
pwd
> /home/corban
cd ~
pwd
> /tmp
```

# The PATH

The PATH contains a list of directories separated by a `:` to list binary executable locations. The terminal will look in the first path first for each command.

The `which` command shows the location of the program. 

If running a bash shell (verified with `echo $SHELL`), editing the .bashrc file in the home folder can set actions to run every time a new terminal window is opened. To add a path to the PATH, edit the PATH here.

```shell
export PATH=$PATH:<custom path>
```