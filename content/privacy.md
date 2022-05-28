---
title: "Privacy"
date: "2022-05-28"
---

## Summary

1.  Windows vs Linux
2.  VPN's are selling your data
3.  TOR vs I2P
4.  Domain Name Server (DNS)
5.  Browsers and Fingerprints
6.  Encrypt your data
7.  Emails aren't secure
8.  Who else is watching ?

## Windows vs Linux

### Windows

> “Finally, we will retain, access, transfer, disclose, and preserve personal data, including your content (such as the content of your emails in Outlook.com, or files in private folders on OneDrive), when we have a good faith belief that doing so is necessary (…)”

— [Windows Privacy Policy](https://privacy.microsoft.com/en-us/privacystatement)

### Linux

Most privacy and security focused distributions of linux are :

- [Whonix](https://www.whonix.org/) even runs on Windows as a Virtual Machine in two parts : gateway and client.
- [Tails](https://tails.boum.org/) is literally [Tor Project](https://www.torproject.org/) operating system.
- [QubesOS](https://www.qubes-os.org/) for advanced users only, each part of the system runs in an isolated container !

## VPN's are selling your data

VPN stands for Virtual Private Network, a direct link between two machines allowing you to route your internet traffic through.

You've heard that VPN are private and secure : **how foolish** !

Free VPN's but also paid ones are actively selling your browsing data and your bandwith, spamming you with ads loaded with heavy tracking scripts : resulting in damaged hardware on the long run..

If you decide to chose a VPN anyways, make sure to choose one with **strict no user-log policy**, otherwise : your VPN provider might give everything he has on you in case of law enforcement !

[iVPN](https://www.ivpn.net/) is the only one I trust, personally and has a wide set of features :

- [Hardcore mode : blocking Google trackers and Facebook pixel](https://www.ivpn.net/blog/block-ads-and-beat-data-surveillance-with-ivpns-antitracker/)
- custom DNS override, even DNS over HTTPS - DoH
- split tunnelling (chose to not route internet traffic over VPN for specific apps)
- [no affiliate marketing](https://www.ivpn.net/blog/closed-affiliate-program/) because "[YouTubers who know little about information security advertise VPNs and endorse products they would never use themselves.](https://www.ivpn.net/blog/why-we-refuse-modern-marketing/)"
- they accept bitcoin and monero
- [they are f_cking serious about privacy](https://www.ivpn.net/privacy-guides/)

## TOR vs I2P

Now we're covered VPN's let's talk and compare their alternatives : [TOR](https://www.torproject.org) and [I2P](https://geti2p.net/) !

Both are "darknets", and have hidden services that you can visit `.onion` websites on TOR, and `.i2p` on I2P.

[I2P documentation has a complete comparaison](https://geti2p.net/fr/comparison/tor) so I'll stay brief.

Main differences are that you cannot visit the public internet with I2P, while you can with TOR and that I2P is faster because TOR connects to a minimum of 3 relay nodes.

## Domain Name Server (DNS)

Domain Name Servers are servers responsible for associating an IP address with a domain name `www.example.com`.

By default, your Domain Name Server is your Internet Service Provider (ISP).

Each time you visit a website, you're asking to your home router the resolution of a domain name for it's underlying IP address, and this is done in clear through port 53. This being said : each website you visit, even through a VPN, TOR or I2P : you're asking your ISP which sees all queries in clear.

To avoid DNS leaks, multiple solutions :

- privacy respectul DNS like [dns.watch](https://dns.watch/)
- use DNS over HTTPS (DoH) : either on your machine globally, on in browser ([easy to setup on Firefox](https://support.mozilla.org/en-US/kb/firefox-dns-over-https))
- [DNS over I2P](https://systemadminspro.com/dns-over-i2p-real-privacy-of-dns-queries/)

DNS shares same issues than VPN : you must trust them to not log what you're doing !

Best solution is to build your own :)

## Browsers and Fingerprints

When it comes to privacy browsers, choices aren't unlimited :

- [UnGoogled Chrome](https://avoidthehack.com/how-to-install-configure-ungoogled-chromium) / [Chromium](https://www.chromium.org/) : but still uses Google machinery..
- Firefox : [mostly paid by Google](https://www.androidheadlines.com/2020/08/mozilla-firefox-google-search) and [promoted censorship](https://blog.mozilla.org/en/mozilla/we-need-more-than-deplatforming/)
- IceWeasel : [Debian's fork of Firefox](https://wiki.debian.org/fr/Iceweasel) [lets you tweak your user-agent](https://www.geticeweasel.org/) ;)
- TOR

Okay, but what are Fingerprints ?

It's a combination of your user-agent (Browser, Version, Operating System), your language preferences, your timezone !

You can test your uniqueness on [https://amiunique.org/](https://amiunique.org/), the goal being of cours to be common as possible :)

## Encrypt your data

I recommend you using [Eureka](https://github.com/mimoo/eureka) or [Magic WormHole](https://github.com/magic-wormhole/magic-wormhole) for unique encrypted file sharing.

You can make use of GPG to encrypt your files with a password quite easily on most Linux distributions by running :

```
gpg --symmetric /path/to/file
```

You'll be prompted to enter and validate a password, after what a `file.gpg` will appear in your folder, so you can delete the original `file`.

**I highly recommend you to encrypt your seed phrases and 2FA recovery codes**

When it comes to encrypt your harddrive, that's a choice during install for most Linux distributions.

To encrypt your folders, you can make use of :

- BitLocker on Windows (not recommended)
- [Encfs on Linux](http://sdf.org/?tutorials/encfs_tutorial)
- [Disk Utility or FileVault on Mac OSX](https://www.macupdate.com/blog/post/66-how-do-you-encrypt-files-folders-on-mac)

## Emails aren't secure

[Emails are very old tech](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) - 1982, and they're weak !

## Who else is watching ?

Sorry not sorry : potentially any app your installed :)

[Apps like Facebook, Whatsapp, Sign, etc.. are free because they're selling your data even when pretending being End-to-End Encrypted.](https://pocketnow.com/stop-being-naive-when-it-comes-to-things-like-whatsapp-telegram-signal-etc)

Oh, and [Discord is the worse of them](https://evgenverzun.com/explored-in-discord-strong-indicators-of-privacy-compromising-acts/) !

Some examples of things that can be running in the background without you noticing :

- [vendor bloatwares](https://www.computerworld.com/article/2966113/bloatware-what-it-is-and-how-to-get-rid-of-it.html)
- [spywares](https://www.malwarebytes.com/spyware)
- [malwares](https://www.malwarebytes.com/malware)
- [rootkits](https://www.veracode.com/security/rootkit)
- [keyloggers](https://www.malwarebytes.com/keylogger)

## Final word

Thanks for reading, and good luck if you're trying to stay private !