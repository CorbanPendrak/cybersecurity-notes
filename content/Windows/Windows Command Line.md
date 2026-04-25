---
tags:
  - windows
MOC: "[[Windows MOC]]"
---
-- --

The Command Prompt is a command line interpreter (CLI) for automating tasks with scripts. 

# Navigation

The `cd` command changes the directory.

To change the drive, type the drive letter with `:`, like `D:`.

Unlike `ls` in Linux, `dir` is used to show files 

# Basic Commands

| Command                              | Description                                       |
| ------------------------------------ | ------------------------------------------------- |
| `mkdir <foulder>`                    | Make a new directory                              |
| `copy <source> <destination>`        | Copy files to a new location                      |
| `robocopy <source> <destination> /S` | Copy directory and subdirectories excluding empty |
| `robocopy <source> <destination> /E` | Copy subdirectories with empty directories        |
| `move <source> <destination>`        | Move files, including directories                 |
| `del <file>`                         | Delete file                                       |
| `rmdir <directory>`                  | Deletes empty directory                           |
| `rmdir /S <directory>`               | Deletes directory and contents                    |
| `more <file>`                        | Display content of file page by page              |
| `find <directory> "<text>" 2>null`   | Searches inside files for text and hide errors    |
| `where <file>`                       | Locates file on computer                          |

# Networking

| Command                                                                      | Description                           |
| ---------------------------------------------------------------------------- | ------------------------------------- |
| `ipconfig`                                                                   | Check network settings                |
| `netsh interface ip set address <connection> static <IP> <subnet> <gateway>` | Set IP address                        |
| `net use <drive>: <shared drive>`                                            | Mount shared drive to specified drive |
| `net use <drive>: /delete`                                                   | Removes specified drive               |

# User Management

| Command                                       | Description                                    |
| --------------------------------------------- | ---------------------------------------------- |
| `net user`                                    | Display current users                          |
| `net user /add <username> <password>`         | Add new user (Put `*` for password to hide it) |
| `net user /delete <username>`                 | Delete user                                    |
| `net user <username>`                         | Check user groups                              |
| `net localgroup <group_name> /add <username>` | Add user to group                              |
