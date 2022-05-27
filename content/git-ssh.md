# How to git over SSH

[`git`](https://git-scm.com/) is Free Open Source Software - *FOSS*, and is unavoiable [version control tool](https://www.atlassian.com/git/tutorials/what-is-version-control) used in corporate software industry and other related fields. It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) author of the [Linux Kernel](https://en.wikipedia.org/wiki/Linux), 

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

By default, if you leave your key unnamed, it will be located at `~/.ssh/id_ed25519`.

If you named your key, it will be located in your `$HOME` folder `/home/$USER/` by default, except if you specified path.

You can still `ls ~/`, find your private and public key and `mv id_ed25519 id_ed25519.pub ~/.ssh` to place it where it should.

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

Now, head to [Github Settings](https://github.com/settings/keys), click `New SSH Key` and paste in the result of `cat ~/.ssh/[key_name].pub` !

Do not mistake `id_ed25519` with `id_ed25519.pub` !!! (or whatever your key name)

The first is your private key, and the second is your public key !

## You're done !

That's it !

Now you can `git@github.com:[user]/[repo].git` without using old deprecated method with access tokens !

## Security Note

Securing your workstation is out of the scope of this article, but if you get compromised : strict permission control can limit attackable surface is case of account takeover. Make sure to do your homeworks !

