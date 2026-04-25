---
tags:
  - security
MOC: "[[Security Concepts MOC]]"
---
-- --

Encryption converts data to protect the confidentiality of the data. Good encryption has authentication, the sender can be verified; integrity, the message hasn't been changed; and non-repudiation, the sender is guaranteed. 

# Requirements

Encryption requires the data to encrypt, an encryption key, and the encryption algorithm. Decryption requires the encrypted data, the decryption key, and the encryption algorithm. 

# Algorithm

The best encryption rely on trustworthy and known mathematical algorithms. Breaking the algorithm requires finding a flaw in the encryption algorithm or guessing the encryption key. 

# Encoding

Encoding is often confused for encryption, but while encryption hides the data so only the recipient can read it, encoding transforms the type of data, like from ASCII to hex.

# Types

The symmetry of the encryption, whether it is symmetric or asymmetric, determines if the decryption key is the same as the encryption key.
## Symmetric Encryption

For symmetric encryption, the decryption key is the same as the encryption key. The Caesar Cipher is a simple transposition that shifts the letters in the alphabet by an amount and is decrypted by reversing the amount. Today, the Advanced Encryption Standard (AES) algorithm uses symmetric encryption. The difficulty with symmetric encryption is exchanging the key.

```Shell
openssl enc -dec3 -in test.txt -out sym_enc.enc
openssl enc -aes-256-cbc -d -in flag.txt.enc -base64 -out flag.txt -pass pass:Password123
```

## Asymmetric Encryption

Asymmetric encryption has a public and private key which are separate for sharing and encryption. Asymmetric encryption is more secure since the data can be validated with the sender's public key and secured with the receivers private key, but is generally slower.

```Shell
echo "Generating private key"; openssl genrsa -out private.pem 2048
echo "Private Key:"; cat private.pem
echo "Generating public key"; openssl rsa -in private.pem outform PEM -pubout -out public.pem
echo "Public Key:"; cat public.pem
echo "Encrypting test.txt"; openssl pkeyutl -encrypt -in test.txt -pubin inkey public.pem -out encrypt.txt
echo "Encrypted data:"; cat encrypt.txt
echo "Decrypting data"; openssl pkeytuil -decrypt -in encrypt.txt -inkey private.pem -out decrypt.txt
echo "Decrypted data:"; cat decrypt.txt
```

## Hashing

Hashing is one-way encryption that can't be decrypted. Importantly, the hash is very different based on small changes and no two items should result in the same hash. Hashes are useful for comparing long files and storing passwords securely.

There are several hashing algorithms commonly used today. MD5 is older and considered broken, along with SHA1. SHA2, SHA3, SHA256, and SHA512 are still considered secure.

```Shell
echo "Im a file" > file1.txt
echo "im a file" > file2.txt
echo "im a file " > file3.txt
md5sum *
```

```powershell
Get-Filehash -path file1.txt -algorithm md5
```