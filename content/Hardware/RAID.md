---
tags:
  - hardware
MOC: "[[Hardware MOC]]"
---
-- --

The Redundant Array of Independent Disks (RAID) is a group of several disk drives that appears as a single disk in the OS.

# RAID 0

RAID 0 is known as 'striping' and is optimized for performance and read/write speed, but has high failure, dependent on each drive.

# RAID 1

RAID 1 is known as 'mirroring' and duplicates data across drives, increasing fault tolerance, but halving storage capacity.

# RAID 5

RAID 5 is known as 'striping with parity' and requires at least three drives for maximum read speed and single drive failure, but reduced write speed.

# RAID 6

RAID 6 is known as 'striping with double parity' and requires at least four drives for maximum read speed and two drives failure, but slower write speed.

# RAID 10

RAID 10 is a combination of RAID 1 and RAID 0 for both striping and mirroring to maximize read/write speed and single disk failure, but only half the disk space is available for storage.