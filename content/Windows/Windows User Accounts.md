---
tags:
  - windows
MOC: "[[Windows MOC]]"
---
-- --

Use accounts divide permissions and ownership.

Users can be created in Control Panel > Accounts > Family & other people > add account. Users can also be created in the management console > Users > New User 

# Default Accounts

All three default accounts are disabled by default.
## Administrator

This account has full control over the machine, but is unable to break the OS.

## Guest

This account is used by people without an actual account on the computer and is very limited.

## DefaultAccount

This is the template for all new accounts on the machine. 

# Account Types

The Administrator account makes changes affecting all users.  The standard account cannot effect other users. The child account has parental controls enabled for the standard account.

# User Access Control

The User Access Control (UAC) assigns tokens to the user upon log in for running applications with limited access level. When an application requires elevated privileges, it will create a popup for approval.

UAC can be disabled or strengthened in the settings.
