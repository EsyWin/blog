# How to git over SSH
[`git`](https://git-scm.com/) is Free Open Source Software - *FOSS*, and is unavoiable [version control tool](https://www.atlassian.com/git/tutorials/what-is-version-control) used in corporate software industry and other related fields. It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) author of the [Linux Kernel](https://en.wikipedia.org/wiki/Linux), 

## Basic Assumptions :
I assume you're running a `linux kernel` which embed `git`.

This can be either [WSL](https://docs.microsoft.com/en-us/windows/wsl/) on Windows, or any [linux distribution](https://distrowatch.com/dwres.php?resource=major).

On [Mac OSX](), you'll need to run the following to install `git` :

```shell
brew install git
```

## Generate SSH Key
[Github Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) gives us the command :

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
# if you system does not support ed25519
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

By default, your key is located in your `$HOME` folder `/home/$USER/`until you specify otherwise when prompted so.

## Adding your SSH Key to ssh-agent
You'll need to re-enter these for each new terminal session :

```shell
# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# add your key
ssh-add ~/.ssh/[key_name]
# try ssh into github
ssh -T git@github.com
```

If everything went well, you should see the following line in your terminal :
```shell
Hi [Github Username]! You've successfully authenticated, but GitHub does not provide shell access.
```

Now, head to [Github Settings](https://github.com/settings/keys), click `New SSH Key` and paste in the result of `cat ~/.ssh/[key_name].pub` !

By default your key is located in `/home/$USER` folder, so you might have to either specify path properly wherever is your key, or move your key in `~/.ssh`

```shell
# move keys in ~/.ssh
mv [key_name] [key_name].pub ~/.ssh
# alternatively, you can specify path to ssh-agent
ssh-add /path/to/[key_name]
```

## Troubleshooting
### My local files are broken
If you mess with you local files, and want to revert them into your last commit, you can run either `git reset --hard`  to reset to  `HEAD` or   `git checkout -- .` as you prefer : I personally use the first one. 

### SSH permission denied
If you get `permission denied` you need to start `eval "$(ssh-agent -s)"` and `ssh-add /path/to/key` at each new terminal session.
## Security Note
Securing your workstation is out of the scope of this article, but if you get compromised : strict permission control can limit attackable surface is case of account takeover. Make sure to do your homeworks !

