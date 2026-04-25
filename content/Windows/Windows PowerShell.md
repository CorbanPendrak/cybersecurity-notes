---
tags:
  - windows
MOC: "[[Windows MOC]]"
---
-- --

Windows PowerShell is a more powerful tool than the [[Windows Command Line]] based on .NET that combines the interactive terminal with powerful scripting capabilities. 

The PowerShell integrated scripting environment (ISE) can test PowerShell scripts, stored with the `.ps1` extension.

Unlike the [[Linux Terminal]], PowerShell has limitations effecting the OS and running entirely in the command line. Unlike the [[Windows Command Line]], specific cmdlets can be allowed or denied, allowing for a more granular permission system.

A cmdlet is a lightweight command that does a small thing that are instances of .NET code run by PowerShell.  

# Commands

Commands use a verb-noun naming system.

- `Get-Command`
	- Find a cmdlet
	- -Noun
		- Search for cmdlet by noun
	- -Verb 
		- Search for cmdlet by verb
- `Get-Help <cmdlet>` 
	- Get help for specific command
	- `-showWindow`
		- Open help screen in a new window
- `Get-Member`
	- Get object from cmdlet
- `Get-ChildItem`
	- List contents of folder
- `Get-Content`
	- Display contents of file
- `Get-Process`
	- Get running processes
- `Start-Process`
	- Start process
	- `-FilePath "<file>"`
		- Run file
- `Stop-Process`
	- `-Name <process name>`
	- `ID <ID_number>`
- `Set-Alias -Name <alias> -Value <cmdlet>`
	- Set alias for cmdlet

Just like the [[Linux Terminal]], the result of a command can be piped with `|` to run multiple commands. This is especially useful for commands that modify text, like an export.

- `Export-CSV`
	- Export to Comma Separated Value format (like Excel)
- `Export-CliXML`
	- Export to XML format
- `Out-Gridview`
	- Print output as a grid.

## Remote Management

PowerShell also has tools for remote management, like [[The ssh Command|SSH]]. 

- `Enter-PSSession`
	- Similar to [[The ssh Command|SSH]]
	- `-ComputerName <ip>`
	- `-Credential <user_name>`
- `New-PSSession`
	- Persistent session with history
	- Can store multiple sessions in one variable
		- Call commands on all sessions at once.
- `Invoke-Command`
	- Execute a block of code with the session as an argument
- `Get-Credentials`
	- Save session password credentials in a variable in a script
# Objects

Unlike traditional interface commands, cmdlets are designed to deal with objects which store and pass more information than just printed. `Get-Member` returns the attributes of the object.

## Variables

Variables begin with `$`.

`$child_items = Get-ChildItem`

The arguments for a script can be accessed with the `$args` variable.