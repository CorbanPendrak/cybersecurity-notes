---
tags:
  - windows
MOC: "[[Windows MOC]]"
---
-- --

The Windows Registry is a hierarchical database of low-level settings for the operating system and any applications that support the registry. The registry values are instructions, the registry keys are folders for the values data, and the registry hives categorize the data. 

The program `regedit` can edit the registry, but an error in the registry can completely break the system. [[Windows PowerShell|PowerShell]] can traverse the directory like regular files and create file values.

# Root Keys

Each node in the tree is a key with subkeys. 

| Root Key | Extended Key        | Description                       |
| -------- | ------------------- | --------------------------------- |
| HKCR     | HKEY_CLASSES_ROOT   | Registers applications            |
| HKCU     | HKEY_CURRENT_USER   | Stores current user configuration |
| HKLM     | HKEY_LOCAL_MACHINE  | Settings for local computers      |
| HKU      | HKEY_USERS          | User-specific configuration       |
| HCC      | HKEY_CURRENT_CONFIG | Current hardware profile          |
# Hives

The layout in the Windows Registry Editor is different from the forensic image.

- SAM
- SECURITY
- SYSTEM
- SOFTWARE
- DEFAULT

# Export

The registry can be exported as a part of [[Forensics|forensics]] to get low-level configuration and persistence. 

## PowerShell

To export registry keys on a remote [[Windows MOC|Windows computer]] with [[Windows PowerShell|PowerShell]], use this command

```PowerShell
Invoke-Command -ComputerName <IP> -Credential <Username> -ScriptBlock {
	Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Run\*
} | Export-CSV <IP>-HKLM-Run.csv
```
