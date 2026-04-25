---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

While these notes can be compiled into a writeup or a [[Penetration Test Report Template|report]], this section is primarily for you. Delete placeholder information where needed. This is where the summary for the report goes.

# Attack Path
This is where an outline of the entire compromise path. Use screenshots and command output where applicable.
# Credentials

| User | Password |
| ---- | -------- |
|      |          |
# Service Enumeration
Website on port 80, something on port 5985. Website directory revealed. 

This section covers which services you've checked, both failed and successful. This can include things about the service, like subdomains, and vulnerabilities.
# Artifacts
If anything needs to be cleaned up by the client, it should be listed here. This includes when and where for service accounts and system changes. It is useful to provide a hash for files.
# Administrative Information
This is for information about the client, like contact information, specific objectives, rules, and scope.
# Activity Log
Overview of everything done for the test. Don't cut console output for the notes, only the report.
## Setup tmux for logging
Use prefix (`Ctrl+B`) and `Shift+I` to install plugins, `Shift+P` to start logging, and `Alt+P` to capture screen output.
```shell
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
tee -a .tmux.conf << 'EOF'
set -g @plugin 'tmux-plugins/tpm' 
set -g @plugin 'tmux-plugins/tmux-sensible' 
set -g @plugin 'tmux-plugins/tmux-logging' 
set -g history-limit 50000
# Initialize TMUX plugin manager (keep at bottom) 
run '~/.tmux/plugins/tpm/tpm'
EOF
tmux source ~/.tmux.conf
```

- [ ] Nmap scanning
- [ ] exploit everything


