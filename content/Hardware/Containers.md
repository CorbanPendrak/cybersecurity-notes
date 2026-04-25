---
tags:
  - hardware
MOC: "[[Hardware MOC]]"
---
-- --

Containers are overall less isolated, efficient, less spacious, implicitly version-controlled, portable, and capable of multiple instances as opposed to virtual machines. Containers do not use the entire guest operating system but just the application. 

# Docker

Docker can create containers. Images are templates for containers. The Docker Daemon builds, runs, and delivers containers. The Docker Client issues the commands to the Docker Daemon. The Docker Hub is a registry for Docker images.

Docker is used by developers for replicating development and environments. Containers are portable and use resources efficiently. 

## Docker CLI

This is the Docker command line implementation.

Download and run hello-world container.
```Shell
$ docker run hello-world
```

Test with busybox
```Shell
$ echo "Download busybox"; docker pull busybox
$ echo "List available images"; docker images ls
$ echo "Run busybox"; docker run busybox:latest
$ echo "List running processes"; docker ps
$ echo "List earlier processes"; docker ps -a
$ echo "Run interactive terminal in busybox"; docker run -it busybox /bin/sh
$ echo "Remove nonrunning containers (keeps images)"; docker container prune
$ echo "Download and run Ubuntu bash shell"; docker run -it ubuntu bash
$ echo "Remove image"; docker image rm ubuntu
```

Test creating an image
```Shell
$ nano docker-file
```

`docker-file`:
```Text
FROM ubuntu

RUN apt-get -y update && apt-get -y install figlet update-motd wget curl 
RUN apt-get -y install netcat socat

RUN service ssh restart

ADD test.txt /opt/test.txt
CMD 
```