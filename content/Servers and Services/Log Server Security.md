---
tags:
  - server
MOC: "[[Servers and Services MOC]]"
Parent: "[[Log Server]]"
---
-- --
# SIM

Security Information Management (SIM) is the tools or platforms that collect and store all logged data. These can collect data from things like:

- Web servers
- Firewalls
- IDS and IPS logs
- Router information
- Terminal commands
- Changes to an employees computer
- Antivirus logs
- DNS servers
- Authentication servers
- Database access

# SEM

Security Event Management (SEM) is the tools that provide real-time analysis of all SIM data with alerts. This can provide warning alarms or network trends.

# SIEM

This is a combination of SIM and SEM and automates most of the process. 

## ELK

The ELK stack combines Elasticsearch, Logstash, and Kibana to grab logs, process, and store them. Although it doesn't have some alerting and correlation capabilities, these can be added, like with SOF-ELK.