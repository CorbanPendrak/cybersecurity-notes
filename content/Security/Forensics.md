---
tags:
  - security
MOC: "[[Security Concepts MOC]]"
---
-- --

Digital forensics preserves and evaluates data to reconstruct prior events for incident response and criminal cases.

If evidence is needed for the court, use a bound notebook for conclusions and collect physical evidence in seal-able bags for the chain of custody. 

# Steganography

Steganography conceals data in other data. Today, this can involve concealing data in encrypted in the lowest bits using complex algorithms. 

Detecting can be very difficult due to the many options and amount of media not hiding anything. For images and audio, the Least Significant Bit (LSB) algorithm embeds the text in small segments throughout the media.

Some tools for steganography are Crypture, which uses BMP images, Binwalk, which identifies embedded files in a binary image, [[Steghide]], which hides data in images or audio, rSteg, which hides text in an image, and OpenStego, which can hide images and text in other images.

# Log Files

Log files contain detailed chronological information about events and can be viewed through the GUI, [[Windows PowerShell]] or [[Linux Terminal]], or Log collections. The main logs are Security, System, and Application logs. Time zones should be carefully noted. These are some common Windows event codes.

| Event Code | Meaning                              |
| ---------- | ------------------------------------ |
| 4624       | Successful login                     |
| 4625       | Failed login                         |
| 4609       | Windows shutdown                     |
| 4732       | Member added to local security group |
| 1102       | Security audit log deleted           |

# File Forensics

This branch of forensics extracts information from hard disk images, typically in E01 files. 

## File Systems

The file system helps file forensics in acquisition, validation, and extraction.

### NTFS

The New Technology File System is Microsoft's proprietary system for [[Windows MOC|Windows]]. The Master File Table (MFT) entries can show deleted files.

### FAT

The File Allocation Table (FAT) system keeps track of divided file parts. FAT has no folder and local security and FAT32 can more efficiently store data.

### EXT

The Extended File systems (EXT, EXT2, EXT3, EXT4) are used on Linux.

## Disk Captures

If the computer is on, a tool like magnet's Encrypted Disk Detector can take a live capture. If the disk is no encrypted, just remove the hard drive and access it with a write blocker. Write down the hash of the disk image in the notebook, evidence bag, and with the image.

## Deleted Files

Deleted files that have not been overwritten remain on the disk. For SSDs, wear levelling prevents overwriting the file to completely remove it.

## Windows Registry

The [[Windows Registry]] is useful for analysis, like programs run. Prefetch artefacts are stored in `%Windows%\Prefetch` and can show applications started and timestamps.

## Tools

Volatility has a large number of plugins, is free and open source, and is common for memory forensics. FTK Imager is free and captures forensic images of hard disks. TSK and Autopsy are useful for forensics investigations with TSK as CLI and Autopsy as GUI.

## File Headers

The file header identifies the format of the data for which application to use in Linux. To identify the file based on the header, use the [[The file Command|file command]]. [[Windows MOC|Windows]] relies on the file extension.
# Email Forensics

Email forensics studies the source and content of email messages. Personal Storage Table (PST) files store information about the emails in Microsoft Outlook and can be recovered with file forensics. Base64 is commonly used for encoding emails.

# Memory Forensics

Memory forensics analyzes the volatile memory from systems. If the target device is not turned off, memory acquisition is the highest priority, since it is discarded when the computer is powered off. 

[[The Volatility Command|Volatility]] is widely used and can analyze many types. 

# Network Forensics

Network forensics analyzes the network traffic. NetFlow is the term for capturing meta-data from network traffic and is also a Cisco technology. Data from full packet captures can be examined with tools like Wireshark and tcpdump. 

Wireshark is a network packet analyzer for troubleshooting and analyzing network traffic. 


| Wireshark filter | Description                          |
| ---------------- | ------------------------------------ |
| ip.addr          | Packets with IP address of value     |
| ip.dst           | Packets with destination IP address  |
| ip.src           | Packets with source IP address       |
| tcp.port         | Packets with TCP port of value       |
| udp.port         | Packets with UDP port of value       |
| http.request     | All HTTP requests                    |
| http.response    | All HTTP responses                   |
| dns              | All packets with DNS data            |
| tcp contains     | All TCP packets with matching string |
