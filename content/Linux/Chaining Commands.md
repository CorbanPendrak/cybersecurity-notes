#terminal 
[[Linux Commands MOC]]
- - -

Chaining commands helps with scripting. Closely related with chaining is [[Pipes and Redirects|pipes and redirects]].

```shell
$ ls; sleep 5; ls
```

# Example

List running processes matching "smbd" filtering out "grep", filter for PID field, and terminate each process
```shell
$ ps aux | grep smbd | grep -v grep | awk '{ print $2 }' | kill -9
```

