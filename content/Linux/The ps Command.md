#command #terminal 
[[Linux Commands MOC]]
- - -

The `ps` Command lists running [[Processes|processes]] and defaults to processes by the current user.

# Usage

`ps <parameter>`

## Important Flags

Accepts BSD or Linux syntax parameters. BSD looks like `ps aux`, while Linux syntax looks like `ps -ef -f`.

### BSD syntax
- `aux`: All running processes (includes other users)
- `auxf`: Full processes with subprocesses in detail