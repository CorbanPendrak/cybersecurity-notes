---
tags:
  - security
MOC: "[[Security Concepts MOC]]"
---
-- --

# General

**Mission Qualification Training**: (MQT) provides operational training for operators for a Qualification evaluation.

**Pre Mission Brief Content**: critical information for mission

**Rules of Engagement**: Set of rules for performing operations

**Communication Contracts**: Tactical & operational-level reporting terminology

**Pre-approved Actions**: (PAA) Actions approved prior to execution by both CPT leadership and Mission Partner.

**Pre-Coordinated Actions**: (PCA) Actions agreed to by Mission Partner but require coordination and approval by Mission Partner before the CPT can execute them.

**Measure of Performance**: (MOP) Criterion for accessing friendly actions tied to measuring task accomplishment. Completing a task.

**Measure of Effectiveness**: (MOE) Criterion for assessing changes in attaining the end state or objective. Completing an objective.

**Indicator of Compromise**: (IOC) A piece of information that insinuates an intrusion when found and is either atomic, computed, or behavioral. Atomic just is, like an IP address. Computed runs based on program, like a hash. Behavioral based on heuristics.

**Standard Operating Procedure**: (SOP) Publications for how to employ a TTP; specific to mission for group/unit.

**Situational Report**: (SITREP) Status report during mission

**Deviation Request**: Request for deviation from mission.

**Operator Crew Log**: Official record of events during crew shift for all significant events, including deviations.

**Tactics, techniques, and procedures** (TTP) link tactical opjectives to steps.

**ACCI 17-202V1 Cybercrew Training**: What to know

**ACCI 17-202V2 Standardization/Evaluation Program**: what to be evaluated on

**ACCI 17-202V3 Cybercrew Operations and Procedures**: Operational procdedures

**AFI 17-203**: Detailed list of responsibilities.

**Form 4326**: to unit weapons and tactics shop for non-material solution to deficiancy.

**USCYBERCOM**: has been elevated to combatant command and includes AFCYBER, ARCYBER, MARFORCYBER, and FLEETCYBER.

**Cyber Protection Teams**: (CPT) Threat-focused intelligence driven mission.

**Offensive Cyberspace Operations**: (OCO) Missions to target adversary cyberspace functions.

**DoD Information Network**: (DODIN) Actions to assist DoD communications systems and networks.

**Defense Cyberspace Operations**: (DCO) 
	**Defensive Cyberspace Operations-Response Actions**: (DCO-RA) Actions external to defended network of portion of cyberspace without permission of the owner of the affected system, cyberspace attacks and exploitation.
	**Defensive Cyberspace Operations-Internal Defensive Measures**: (DCO-IDM) Actions within defended network to detect, characterize, counter, and mitigate threats.  

**616th Operations Center**: Issues cyber orders

**National CPTs**: Teams assigned to defensive missions against specific adversaries, support DTN operations.

**DODIN CPTs**: Teams focus on DODIN core and boundary 

**Defensive Information System Network**: (DISN) controlled cyberspace with coordination across DODIN.

**CCMD CPTs**: Region specific

**Service CPTs**: Teams uniquely owned by the respective Service for service-unique challenges, priorities, and requirements.

**Operational Control**: (OPCON) authority to perform functions of command

**Administrative Control**: (ADCON) direction or exercise of authority over subordinates

**Cyber Protection Team**: intelligence-driven operations on a key terrain, clear adversary activity, enable hardening, and assess effectiveness of response operations.

All Source Analysts: Gather intelligence for missions

Network Analysts: Specializes in network traffic signatures

Host Analysts: Specializes in operating system services and security. 

Network Technicians: Responsible for maintaining security of the CIP during operations

Data Engineer: Specializes in ensuring data is accessible and has integrity

Analytic Support Officer: Specializes in collecting, analyzing, and responding to data using mathematics, programming, and domain knowledge

Cyber Crew Lead: responsible for Plan, Brief, Execute, and Debrief (PBED),  develops tactical tasks, manages risk, makes all cybercrew-related mission decisions.

## Evaluations

Qualification Evaluation: basic qualification for position

Mission Evaluation: qualification for specific position on mission
# Hardware

**Mobile Interceptor Platform**: (MIP) gives console access to GIP and DIP through SSH or VPN tunnels.

**Virtual Interceptor Platform**: (VIP) virtual MIP

**Deployable Interceptor Platform**: (DIP) aggregates data from sensors and interacts target network. Runs signature-based NIDS with Snort/Suricata, customizable NIDS with Zeek, packet capture traffic and netflow.

**Packet Capture**: (PCAP) entire network packet data.

**Mirrored Ports**: Mirrors ports for tapping, open port on a switch

**Test Access Point**: (TAP) dedicated hardware device

**Garrison Interceptor Platform**: (GIP) supports remote operations for mission data. Accesses deployed CVA/H components.
# Software

**Elasticsearch**: web interface for distributed multi user full-text search engine and schema-free database. Typically uses Kabana. Contains information from Suricata/Snort and Zeek.

**Logstash**: Transforms data for Elasticsearch. Parses each event logs from Zeek or alerts from Suricata for Elasticsearch

**Beats**: Agent software in ELK stack. Winlogbeats for Windows eventlogs, Filebeats ships Zeek logs and Suricata alerts to Collector based on monitored directory. Metricbeat collects metrics from system and services. Packetbeat is a lightweight network packet analyzer. Auditbeat collects Linux adit framework data.\

**Kibana**: Visualizes data, web GUI, no login. Useful for hunting for bad traffic.

**Arkime**: packet indexing software, web GUI interface. Uses Elasticsearch backend and visualizes Zeek logs.

**Arkime Capture**: Captures network traffic as pcaps for Elasticsearch and viewed with Arkime. Useful for diving deeper into an anomaly connection. 

**Redmine**: Ticketing and tracking system on DIP, submit and track tickets and worksheets, event management and documentation coordination.

**Mattermost**: Login protected chat service on DIP for Operator Crew Logs, open source slack for all communication.

**Endgame**: login based agent persistent monitoring EDR. hunt-oriented platform for prevention, detection, threat hunting, and response capabilities. 

**File Server**: Login based Nix Operating system for hosting files as central storage. Interface through ssh, sftp, and rsync.

**pfSense**: Firewall, NTP DNS, VPN, and DHCP server, Router

**Snort/Suricata**: Looks for network traffic for specific signitaure sets.

**Zeek**: scripting language
