---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
---
-- --

# Instances

Cloud computing providers provide a virtual machine running on part of a physical server, called an instance. To run a single service, [[Containers]] are better.

An instance can host multiple containers to help scale effectively which are split using a load balancer. When the instance runs out of resources, more containers and instances can be created using a scaling rule, like a CPU usage trigger.

A content delivery network (CDN) speeds up the distribution of static content using outside data centers.

To protect the root account, use an identity and access management (IAM) to create user accounts with limited permissions for day-to-day operations and collaboration.

# Storage

## File

File based storage is the traditional approach for storing it in a filesystem and is commonly used in Network Attached Storage (NAS).

## Block 

Block storage is more common for cloud storage and used in Storage Area Networks (SAN). Data is split into equal sized blocks with a unique identifier to store wherever most efficient.

## Object

Object storage is also common for cloud storage and stores data as flat object structures containing the metadata and identifier, but has no hierarchy. Object storage can scale infinitely by combining storage devices and is most common with APIs.