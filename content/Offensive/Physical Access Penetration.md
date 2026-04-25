---
MOC: "[[Offensive Security Concepts MOC]]"
---
-- --

This is one of my favorite sections, because physical access to the computer allows you to often reset the admin password. While there are some ways to mitigate this, like encrypting the hard drive, these are often either not set or can be circumvented.

# Linux

# Windows
To reset the local Administrator account password, follow these steps.

1.  Open Windows Recovery Environment
	1. This is often the most difficult step and varies according to the machine. One method is holding shift while restarting from the lock screen.
2. Troubleshoot -> Advanced Options -> Command Prompt
3. Find Windows drive letter (typically not `C:`)
	1. `diskpart`
	2. `list volume`
	3. `exit`
	4. `dir C:\` 
	5. Look for the one with `Windows`, `Users`, `Program Files`, ...
4. Enable admin account
	1. Change to Windows drive
	2. `cd \Windows\System32`
	3. `copy utilman.exe utilman.exe.bak`
	4. `copy cmd.exe utilman.exe`
	5. To replace Ease of Access button with `cmd.exe`
5. At login, click the Ease of Access icon to open `cmd.exe`
6. Enable hidden admin account
	1. `net user Administrator /active:yes`
	2. `net user Admintrator NewPassword`
7. Login as admin
8. Restore `utilman.exe`
	1. `cd \Windows\System32`
	2. `copy /y utilman.exe.bak utilman.exe`
	3. `net user Administrator /active:no`


# AI
These are results copied from AI, so I will need to verify them before incorporating them above.

> You reset it from outside the normal login, using recovery/single‑user mode and ‎⁠passwd⁠.
> 
> I’ll outline the general idea first, then a concrete procedure. Exact steps differ a bit between distros (Ubuntu vs Arch vs Fedora), but the pattern is the same: boot into a root shell without a password, remount the disk read‑write, run ‎⁠passwd⁠, reboot.
> 
> Broad idea
> 
> On most Linux systems, the “admin” account is just the ‎⁠root⁠ user or a normal user with ‎⁠sudo⁠ rights. If you’ve lost the password:
> 
> 1. You boot into a mode where the system gives you a root shell without asking for the old password (e.g. “recovery mode” or “single‑user mode” from GRUB).
> 
> 2. You remount the root filesystem so you can write changes.
> 
> 3. You run ‎⁠passwd root⁠ (or ‎⁠passwd yourusername⁠) to set a new password.
> 
> 4. You reboot normally and log in with the new password.
> 
> On a properly hardened server with full disk encryption, password‑protected bootloader, etc., this may be intentionally blocked; but on a typical desktop install you can usually do this if you have physical access to the machine.
> 
> Below is a concrete walk‑through for a typical Ubuntu/Debian‑style system using GRUB and systemd. If you’re using something else (e.g. Arch, Fedora, Kali, etc.), the commands are almost the same; the bootloader screen might look different.
> 
> Step‑by‑step: reset password via GRUB (Ubuntu/Debian style)
> 
> 1. Reboot and get into GRUB menu
> 
>  ▫ Restart the machine.
> 
>  ▫ As soon as it starts booting, repeatedly press and hold ‎⁠Shift⁠ (on BIOS systems) or tap ‎⁠Esc⁠ or ‎⁠F12⁠/‎⁠F2⁠ depending on your machine until the GRUB menu appears.
> 
>  ▫ If you already see a menu with “Ubuntu”, “Advanced options for Ubuntu”, etc., you’re in the right place.
> 
> 2. Edit the boot entry into single‑user mode
> 
>  ▫ Highlight your normal Linux entry (usually the first one: “Ubuntu” or similar).
> 
>  ▫ Press ‎⁠e⁠ to edit it. This opens a temporary config editor.
> 
>  ▫ Find the line that starts with ‎⁠linux⁠ and includes ‎⁠ro quiet splash⁠ or similar.
> 
>  ▫ Move the cursor to the end of that line and replace the ‎⁠ro⁠ and boot options with something like:
> 
>  ⁃ Change ‎⁠ro quiet splash⁠ to:
> ‎⁠rw init=/bin/bash⁠
> 
>  ⁃ Or, if you want to keep the options, just add ‎⁠init=/bin/bash⁠ after them, and ensure there is ‎⁠rw⁠ instead of ‎⁠ro⁠.This tells the kernel to boot straight into a root shell (‎⁠/bin/bash⁠) instead of the usual login system.
> 
> 3. Boot into root shell
> 
>  ▫ Press ‎⁠Ctrl + X⁠ or ‎⁠F10⁠ to boot with the edited options.
> 
>  ▫ The system should boot to a command line as ‎⁠root⁠ without asking for a password.
> 
> 4. Ensure filesystem is read‑write
> Sometimes even with ‎⁠rw⁠ set, the root filesystem might not be writable yet. Run:mount -o remount,rw /
> 
> If you see no error, you’re good.
> 
> 5. Reset the passwordFor the actual root account:passwd root
> 
> For a specific admin user (say your username is ‎⁠corban⁠):passwd corban
> 
> It will prompt you to enter a new UNIX password twice. Choose something strong but memorable.
> 
> 6. Sync and rebootsync
> 
> exec /sbin/reboot -f
> 
> Or, if that fails:sync
> 
> reboot
> 
> The system should reboot normally. Now log in with the new password you set.
> 
> If your system is using recovery mode instead
> 
> Some Ubuntu derivatives have an easier “Recovery mode” option:
> 
> 1. At the GRUB menu, choose “Advanced options for Ubuntu”.
> 
> 2. Select the entry with “(recovery mode)”.
> 
> 3. In the recovery menu, choose “root – Drop to root shell prompt”.
> 
> 4. It may say the filesystem is read‑only. Make it read‑write:mount -o remount,rw /
> 
> 5. Run ‎⁠passwd root⁠ or ‎⁠passwd yourusername⁠, then ‎⁠reboot⁠.
> 
> If this is a server / encrypted disk / locked bootloader
> 
> If any of these are true:
> 
> - Full disk encryption that asks for a passphrase before boot.
> 
> - GRUB is password‑protected.
> 
> - Secure Boot and UEFI settings lock boot entries.
> 
> …then the above may not work. In that case, the usual next‑level approach is:
> 
> 1. Boot from a live USB (any Linux live ISO).
> 
> 2. Mount the disk’s root partition.
> 
> 3. ‎⁠chroot⁠ into it.
> 
> 4. Run ‎⁠passwd⁠ inside the chroot.
> 
> That’s a bit more involved, but follows the same core idea: get some environment where you can be ‎⁠root⁠ on the installed system and run ‎⁠passwd⁠.
> 
> If you tell me which distro you’re on (Ubuntu, Kali, Arch, etc.) and whether this is a laptop/desktop or a VPS/server, I can give you distro‑specific commands and what keys to mash during boot.
> 
> 
> On Windows, you also reset it from outside the normal login, but the tools are different.
> 
> I’ll assume you mean a **local Administrator account password** on a machine you have physical access to (not a Microsoft/online account, not a domain-joined corporate laptop). I’ll sketch the main approaches and where they’re safe vs sketchy.
> 
> **1. Easiest legitimate method: another admin account** 
> 
> If there is **any** other account with admin rights that you can log into:
> 
> 1. Log into that admin account.
> 2. Press ‎`Win + X` → choose **Computer Management**.
> 3. In the left pane, go to **Local Users and Groups → Users**.
> 4. Right‑click the user whose password you forgot → **Set Password…**.
> 5. Set a new password, log out, and sign into the recovered account.
> 
> This is the “designed” way to do it; everything else is more invasive.
> 
> **2. Using Windows recovery environment to enable hidden Administrator** 
> 
> If you **don’t** have any other admin account, the canonical path is:
> 
> 6. **Trigger Windows Recovery Environment (WinRE).**  
>     From the lock screen, hold ‎`Shift` and click **Restart** (bottom right power icon).  
>     Or force‑interrupt boot 2–3 times (power off during spinning dots) so Windows auto-enters recovery.
> 7. In WinRE:  
>     **Troubleshoot → Advanced options → Command Prompt**.  
>     You’ll get a command prompt running as ‎`SYSTEM` on the recovery environment.
> 8. **Find your Windows drive letter.**  
>     In WinRE, Windows is often not ‎`C:` but ‎`D:` or ‎`E:`. Check:Then try:Look for the one with ‎`Windows`, ‎`Users`, ‎`Program Files`.
> 9. **Enable the built‑in Administrator account.**  
>     Suppose the Windows drive is ‎`C:` in WinRE:Now we want to temporarily replace the **Ease of Access** button on the login screen with ‎`cmd.exe` so we get a shell as ‎`SYSTEM`:If prompted, overwrite ‎`utilman.exe`.Close Command Prompt, then **Continue** to boot Windows normally.
> 10. **At the login screen, open a SYSTEM shell.**  
>     On the lock screen, click the **Ease of Access** icon (bottom-right).  
>     Instead of accessibility options, it will open ‎`cmd.exe` as ‎`SYSTEM`.
> 11. **Enable the hidden Administrator account.**Optionally set its password:Close the command prompt, then log in as **Administrator** (it should appear on the login screen).
> 12. **Reset your original account’s password from within Windows.**  
>     Once logged in as ‎`Administrator`:
> 
> - Press ‎`Win + X` → **Windows Terminal (Admin)** or Command Prompt (Admin).
> - List users:
> - Reset the password of the account you care about:You can also use **Computer Management → Local Users and Groups → Users** to set it via GUI.
> 
> 1. **Restore** ‎`utilman.exe` **and disable Administrator again (for security).**  
>     Back in an elevated command prompt:Then reboot. You can now log into your original account with the new password, and the login screen no longer has that SYSTEM command‑prompt backdoor.
> 
> This method is widely used in forensics/IT troubleshooting but obviously assumes full physical access.
> 
> **3. If it’s a Microsoft account or a domain account** 
> 
> If the “admin” account is:
> 
> - **Microsoft account** (email address as username):  
>     You don’t reset this locally; you reset it via Microsoft:
> 
> 1. On another device, go to the official Microsoft password reset page (search “Microsoft account password reset”).
> 2. Reset the password there.
> 3. Use the new password on the Windows login screen.  
>     If the device is offline, you may have to connect to Wi‑Fi first.
> 
> - **Domain/Active Directory account** (corporate machine):  
>     Password resets are done by the organization’s IT/AD admins. Local tricks may violate policies and might be blocked entirely with BitLocker, secured boot, and no local admin.
> 
> **4. Full‑disk encryption and BitLocker** 
> 
> If the disk is **BitLocker‑encrypted** and you don’t have:
> 
> - the BitLocker recovery key,
> - another admin account,
> - or access to the Microsoft/enterprise account that owns the machine,
> 
> then the practical answer is: you can’t legitimately reset the admin password and still access the existing data. The encryption is doing its job.
> 
> In that case, the only non‑magical path is: wipe, reinstall, and restore from backups.
> 
> On Parrot OS on your HP Pavilion, you’ll use the same basic trick as on Ubuntu: edit the GRUB entry, boot into a root shell, then run ‎⁠passwd⁠. The laptop brand doesn’t matter much; the bootloader and distro do.
> 
> Below is a concrete, Parrot‑style walkthrough.
> 
> Step 1: Reach the GRUB menu
> 
> 1. Completely shut down the HP Pavilion.
> 
> 2. Turn it on and immediately start tapping ‎⁠Esc⁠ or ‎⁠F9⁠ to bring up the boot menu if needed; usually, just letting it boot is enough and GRUB shows up.
> 
> 3. When you see the Parrot boot menu (Parrot GNU/Linux, advanced options, etc.), stop there.
> 
>  ▫ If it boots too quickly into Parrot, reboot and hold ‎⁠Shift⁠ during boot to force the GRUB menu.
> 
> Step 2: Edit the Parrot boot entry
> 
> 4. On the GRUB screen, highlight the default Parrot GNU/Linux entry (the one you normally boot).
> 
> 5. Press ‎⁠e⁠ to edit the boot entry.
> 
> 6. Find the line that starts with ‎⁠linux⁠ (it will include the kernel path and something like ‎⁠quiet splash⁠ or similar).
> 
> 7. On that ‎⁠linux⁠ line, go to the end and modify the options:
> 
>  ▫ Change ‎⁠ro⁠ to ‎⁠rw⁠ (if you see ‎⁠ro⁠).
> 
>  ▫ Append this at the end of the line, after a space:
> ‎⁠init=/bin/bash⁠So the end of the line looks roughly like:
> ‎⁠... quiet splash rw init=/bin/bash⁠
> 
> This tells the kernel: “After boot, just give me a bash shell as PID 1, no login manager.”
> 
> Step 3: Boot into a root shell
> 
> 8. Press ‎⁠Ctrl + X⁠ or ‎⁠F10⁠ to boot with the edited entry.
> 
> 9. The system will boot into a minimal environment and you should land at a shell prompt as ‎⁠root⁠ (‎⁠root@parrot:/#⁠ or similar), no password requested.
> 
> If you see any errors and get dropped into some emergency shell, the idea is still the same: you want a root prompt with access to ‎⁠/⁠.
> 
> Step 4: Remount the root filesystem read‑write
> 
> Even with ‎⁠rw⁠, it’s good to be explicit.
> 
> At the root shell, run:mount -o remount,rw /
> 
> If that completes with no error, you can modify passwords and config files.
> 
> Step 5: Reset the password
> 
> Now use ‎⁠passwd⁠ for whichever account you need.
> 
> If you want to reset the root password:passwd
> 
> orpasswd root
> 
> If the admin account is a normal user (say, ‎⁠corban⁠):passwd corban
> 
> You’ll be prompted:
> 
> - ‎⁠New password:⁠
> 
> - ‎⁠Retype new password:⁠
> 
> Choose something strong. It does not need the old password.
> 
> Step 6: Sync and reboot normally
> 
> To flush disk writes and reboot:sync
> 
> exec /sbin/reboot -f
> 
> If that fails, you can try:sync
> 
> reboot
> 
> The machine should reboot into your usual Parrot OS login screen. Log in with the account and the new password you just set.
> 
> If GRUB is locked or disk is encrypted
> 
> Parrot is often used for security work, so sometimes:
> 
> - GRUB has a password.
> 
> - The disk is LUKS‑encrypted.
> 
> - Secure Boot / BIOS passwords are set.
> 
> If GRUB is locked and you don’t have its password, you can’t edit the boot entry this way. At that point, the only honest options are:
> 
> - Use a Parrot live USB (or any Linux live USB), boot from it, decrypt the disk (if you know the LUKS passphrase), ‎⁠chroot⁠ into the system, then run ‎⁠passwd⁠ inside the chroot.
> 
> - Or, if you don’t have the decryption key and the machine is properly encrypted, you’re done: no password reset without wiping the drive.
> 
> This is basically the universe saying “crypto works.”
> 
> Quick recap
> 
> For a standard Parrot OS install on an HP Pavilion:
> 
> - Use GRUB, edit the kernel line, add ‎⁠init=/bin/bash⁠ with ‎⁠rw⁠.
> 
> - Boot to root shell, ‎⁠mount -o remount,rw /⁠.
> 
> - Run ‎⁠passwd root⁠ or ‎⁠passwd username⁠.
> 
> - ‎⁠sync⁠ and reboot into Parrot; log in with the new password.
> 
> That’s the clean, textbook “I have physical access to my own box” method for Parrot‑style pentest distros. %% %%