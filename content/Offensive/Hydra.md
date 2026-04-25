---
tags:
  - red
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

Hydra is a CLI tool that supports several protocols, like [[The ssh Command|SSH]] or [[HTTP Protocol|HTTP]] for password guessing and spraying. 

The simplest form is `hydra -l <login_name> -p <password> -t <repeated_attempts> <service>`. While it does the same as manually connecting and guessing, it does print out the result and password.

However, Hydra is often used with a password list for repeated guessing. To add a password list instead of a single password, use the `-P` flag instead of the `-p` flag. 

Password guessing is often protected by account lockouts after a number of failed guesses, limiting the ability of password lists, so password spraying tries a large number of user accounts. Add a user list instead of a single user with the capital `-L` flag.

Since the attack is only as good as the password and user list, good reconnaissance is very important. Creating a wordlist can use `awk` and `sed` for better text manipulation.