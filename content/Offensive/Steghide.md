---
tags:
  - command
  - terminal
MOC: "[[General Security Concepts]]"
---
- - -

Steghide can hide and extract data in various file types from the command line.

# Usage

`{shell icon}steghide <parameters>`

```shell
$ steghide embed -cf homework.jpg -ef homework.txt
Enter passphrase:
Re-Enter passphrase:
embedding "homework.txt" in "homework.jpg"... done
$ steghide info homework.jpg
"homework.jpg":
    format: jpeg
    capacity: 37.4 KB
Try to get information about embedded data ? (y/n) y
Enter passphrase:
    embedded file "homework.txt":
        size: 29.0 Byte
        encrypted: rijndael-128, cbc
        compressed: yes
$ steghide extract -sf homework.jpg
Enter passphrase:
wrote extracted data to "homework.txt"
```

## Important Flags

- `--info`: Display information about a stego file
- `-ef`, `--embedfile <filename>`: Embed file containing secret message
- `-cf`, `--coverfile <filename>`: File to contain embedded data
- `-sf`, `--stegofile <filename>`: File that contains embedded data
- `-xf`, `--extractfile <filename>`: File to output embedded data