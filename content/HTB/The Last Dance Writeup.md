---
MOC: "[[HackTheBox Writeups]]"
tags: "#writeup"
URL: https://app.hackthebox.com/challenges/The%2520Last%2520Dance
Category:
  - Crypto
socialDescription: HackTheBox The Last Dance Writeup
socialImage:
---
-- --
# Challenge Description
>To be accepted into the upper class of the Berford Empire, you had to attend the annual Cha-Cha Ball at the High Court. Little did you know that among the many aristocrats invited, you would find a burned enemy spy. Your goal quickly became to capture him, which you succeeded in doing after putting something in his drink. Many hours passed in your agency's interrogation room, and you eventually learned important information about the enemy agency's secret communications. Can you use what you learned to decrypt the rest of the messages?
# Theory
According to the [PyCryptodome](https://pycryptodome.readthedocs.io/en/latest/src/cipher/chacha20.html) implementation, which links to the usage of [ChaCha20](https://cr.yp.to/chacha/chacha-20080128.pdf), the ChaCha family of stream ciphers is based on the Salsa20 family with improved diffusion per round without extra operations. 

From `source.py`, the output file contains the initial vector (nonce), a message and its encrypted version, and the encrypted version of the flag. The nonce is "a mandatory value that must never be reused for any other encryption done with \[the same\] key" ([PyCryptodome](https://pycryptodome.readthedocs.io/en/latest/src/cipher/chacha20.html#:~:text=A%20mandatory%20value%20that%20must%20never%20be%20reused%20for%20any%20other%20encryption%20done%20with%20this%20key.))

Stream ciphers make the key stream from the key and nonce and then XOR the message. Since the encryption reuses the key and nonce, it has the same key stream for both messages, which means that the key stream can be revealed by XORing the known message and encrypted version and then used to decrypt the encrypted flag.
# Solution
```python
message = b"Our counter agencies have intercepted your messages and a lot "
message += b"of your agent's identities have been exposed. In a matter of "
message += b"days all of them will be captured"

iv = bytes.fromhex("c4a66edfe80227b4fa24d431")
encrypt_message = bytes.fromhex("7aa34395a258f5893e3db1822139b8c1f04cfab9d757b9b9cca57e1df33d093f07c7f06e06bb6293676f9060a838ea138b6bc9f20b08afeb73120506e2ce7b9b9dcd9e4a421584cfab1132dfbdf4216e98e3facec9ba199ca3a97641e9ca9782868d0222a1d7c0d3119b867edaf2e72e2a6f7d344df39a14edc39cb6f960944ddac2aaef324827c36cba67dcb76b22119b43881a3f1262752990")
encrypted_flag = bytes.fromhex("7d8273ceb459e4d4386df4e32e1aecc1aa7aaafda50cb982f6c62623cf6b29693d86b15457aa76ac7e2eef6cf814ae3a8d39c7")
key_stream = bytes(a ^ b for a, b in zip(message, encrypt_message))

print("Recovered Key Stream:", key_stream.hex())

recovered_flag = bytes(a ^ b for a, b in zip(encrypted_flag, key_stream))
print("Recovered FLAG:", recovered_flag)
```

