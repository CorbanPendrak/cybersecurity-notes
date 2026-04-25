---
tags:
  - command
  - terminal
  - security
MOC: "[[Linux Commands MOC]]"
---
- - -

Volatility can analyze many different types of memory dumps, including virtual machines, raw dumps, and crash dumps.

# Usage

`volatility <parameter>`

```shell
forensic@ubuntu:~/Desktop$ volatility -f memdump.mem imageinfo
Volatility Foundation Volatility Framework 2.6
INFO    : volatility.debug  :   Determining profile based on KDBG search...
        Suggested Profile(s) : Win7SP1x64, Win7SP0x64, Win2008R2SP0x64, Win2008R2SP1x64_23418, Win2008R2SP1x64, Win7SP1x64_23418
                    AS Layer1 : WindowsAMD64PagedMemory (Kernel AS)
                    AS Layer2 : FileAddressSpace (/home/forensic/Desktop/memdump.mem)
                     PAE type : No PAE
                          DTB : 0x187000L
                         KDBG : 0xf80002a0c0a8L
         Number of Processors : 1
    Image Type (Service Pack) : 1
               KPCR for CPU 0 : Oxfffff80002a0dd00L
            KUSER_SHARED_DATA : Oxfffff78000000000L
          Image date and time : 2018-09-25 11:07:37 UTC+0000
    Image local date and time : 2018-09-25 12:07:37 +0100
forensic@ubuntu:~/Desktop$
```

## Important Flags

- `--profile=<profile>`: Set profile discovered in `imageinfo`

## Important Modules

- `pslist`: High-level view of running processes
- `psscan`: Scans memory for EPROCESS blocks
- `pstree`: Displays parent-process relationships
- `filescan`: Scans memory for FILE_OBJECT handles
- `dumpfiles`: Extracts FILE_OBJECTS from memory