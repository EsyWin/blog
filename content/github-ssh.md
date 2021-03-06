---
title: "Github SSH Setup"
date: "2022-05-27"
---

[`Git`](https://git-scm.com/) is Free Open Source Software - *FOSS*, and unavoiable [version control tool](https://www.atlassian.com/git/tutorials/what-is-version-control) in corporate software industry and other related fields. It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) author of the [Linux Kernel](https://en.wikipedia.org/wiki/Linux) in [2005](https://fr.wikipedia.org/wiki/Git).

[Github](https://github.com) is [owned by Microsoft](https://news.microsoft.com/announcement/microsoft-acquires-github/) while the original Team now build and maintain [Gitlab](https://gitlab.com). Both these solutions uses `git` !

Until recently, you would've been able to use Github with Access Token, but this method has been proven to be weak, especially because of developpers committing and pushing their code to remote public repository with their Access Token inside, and because of Application 

## Basic Assumptions :

I assume you're running a `linux kernel` which embed `git`.

This can be either [WSL](https://docs.microsoft.com/en-us/windows/wsl/) on Windows, or any [linux distribution](https://distrowatch.com/dwres.php?resource=major).

On [Mac OSX](), you install `git` by typing the following :

```bash
brew install git
```

## Generate SSH Key

From the [Github Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) :

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# if you system does not support ed25519
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

You'll be prompted to optionally secure your key with a password, which is **highly recommended** !

By default, if you leave your key unnamed, it will be located at `~/.ssh/id_ed25519`.

If you named your key, it will be located in your `$HOME` folder `/home/$USER/` by default, except if you specified path.

You can still `ls ~/`, find your private and public key and `mv key_name key_name.pub ~/.ssh` to place it where it should.

## Adding your SSH Key to ssh-agent

Enter these commands to test your SSH way into Github :

```bash
# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# add your key
ssh-add ~/.ssh/[key_name]
# ssh testing into github
ssh -T git@github.com
```

If everything went well, you should see the following line in your terminal :

```shell
Hi [Github Username]! You've successfully authenticated, but GitHub does not provide shell access.
```

Now, head to [Github Settings](https://github.com/settings/keys), click `New SSH Key` and paste in the result of `cat ~/.ssh/[key_name].pub`.

Do not mistake `id_ed25519` with `id_ed25519.pub` (or whatever your key name), the first is your **private key** to authenticate against your local `ssh agent` with `ssh-add ~/.ssh/key_name`, and the second is your **public key** used to grant authorization for repository changes from your private key.

**NEVER COPY AND PASTE YOUR PRIVATE KEY OR EXPOSE IT ANYWHERE**

## You're done !

Now you can `git clone git@github.com:[user]/[repo].git` without using old access tokens deprecated method !

Remember to `ssh-add ~/.ssh/key_name` each new terminal session !

## Security Note

If your workstation get compromised : there are chances that the attacker will get inside your `~/.ssh` folder and copy/paste your keys.

Strict repository permission control can limit attackable surface is case of account takeover !
