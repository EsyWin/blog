---
title: "SysAdmin 101"
date: "2022-04-30"
---

## Summary :
### Basic Configuration
Essential "hands-on" command line server management.

1.  bash & sh
2.  useradd, usermod
3.  disable root, ssh config & ufw
4.  hostname & DNS
5.  certbot ssl

### Neat Stuff
Unavoidable neat stuff :

*  Docker
*  Nginx
*  Jenkins

## Basic configuration
### 1.  bash & sh
If you don't have command history nor tab completion, your shell is [sh](https://fishshell.com/) instead of [bash](https://www.gnu.org/software/bash/). Type `chsh` to recover you usual shell.

### 2.  useradd, usermod
`root` user isn't safe for everyday maintenance and use.
As root, type the following to create a new user :
```bash
useradd -d /home/[user] [user] 
```
Here, the `-d` flag setup the `$HOME` directory **properly** !
Setup both environment variable, directory and permissions by hand is a real mess.
Now, add a password with `passwd [usernam]` -- you'll be prompted to enter and confirm your password - then add your user to `admin` and `sudo` groups  :
```bash
usermod -aG sudo [user] && usermod -aG admin [user]`
```
Log in typing `su [user]` and verify you can still access `root` by typing `sudo -i`.
Now let's disable direct `root` access to enhanced security ``.

It's best to use randomly generated passwords for single purpose, you can use [KeepassXC](https://keepassxc.org/) to store and generate passwords or use `openssl` to generate some directly in the terminal :
```bash
sudo apt install openssl
openssl rand 60 | openssl base64 -A
```

### 3.  disable root, ssh config & ufw
Now, let's harden our security by disabling root login, tighten ssh security, and setup very basic firewall rules.

We need to edit some values in our `/etc/ssh/sshd_config` then we'll restart the ssh deamon (background application).

Download `nano` if you don't have it yet by typing :
```bash
sudo apt install nano
sudo nano /etc/ssh/sshd_config
```

We'll uncomment parameters we'd like to use by removing `#` at the beginning of the line, let's start by changing default ssh port by changing `#Port 22` to change `Port 667` (that's just an example, you can use any you like) then change `PermitRootLogin yes` to `PermitRootLogin no`.

Now, we need to update `ufw` which stands for `ultrasimple firewall`.

```bash
sudo ufw allow 667 #any port you specified for ssh
sudo ufw enable
sudo systemctl enable ufw
sudo systemctl restart ssh
```

When you'll login to your server you'll need to remove previous known fingerprint for your server, then login specifying `port` since default `22` is now blocked :
```bash
ssh-keygen -f ~/.ssh/known_hosts -R [ip_address]
ssh [user]@[ip_address] -p [port]
```

### 4. Hostname & DNS
You probably noticed in your VPS settings and your root shell looks something similar :
```
root@1234vendor.net
```
Which is pretty ugly.

To modify that, we have three things to do :
1.  `sudo nano /etc/hosts`
Here you'll modify values corresponding to your localhost for networking (domain)
2.  `sudo nano /etc/hostname`
Here it's the domain name itself to register.
3.  `sudo hostnamectl set-hostname [example.com]`
To ensure everything is perfectly setup in system settings.

Now, go to your registar DNS settings, and add the following A record :
```
A	@	[ip_address]	ttl: default
```

`@` is equivalent for `empty` which you can leave.
To get your ip from a shell, type `ip a` and you should be able to figure it out.

`lo` interface is internal loopback, equivalent of `127.0.0.1` so it's never that one.

Default port to display content is `http://[ip_address]:80` or `http://example.com:80` which is the same once we specified DNS record.

If you install `nginx` you'll get default homepage to your website right away !
If you want a simple nginx install, you could run :
```
sudo apt install nginx
```

But for this tutorial, we'll run nginx as a `Docker` container as `reverse proxy` to serve multiple apps on our website on different ports and route them on separate links or subdomains.

### 5.  Certbot SSL
Now it's time to add SSL/TLS security :
You can follow along [certbot documentation](https://certbot.eff.org/instructions) which requires `snap` on ubuntu which we'll install, before going further into installing a certificate :
```bash
# snap install
sudo apt install snapd
sudo snap install snap-store
sudo snap install core; sudo snap refresh core
# remove all previous certbot install
sudo apt-get remove certbot
# certbot install
sudo snap install --classic certbot
# symbolic link
sudo ln -s /snap/bin/certbot /usr/bin/certbot
# nginx HTTPS
sudo certbot --nginx
```

If you need to renew your certificate :
```bash
# whenever you need renewal
sudo certbot renew --dry-run

#	The command to renew certbot is installed in one of the following locations:
#   `/etc/crontab/`
#   `/etc/cron.*/*`
#   `systemctl list-timers`
```

This it it : if you installed nginx you now have HTTPS support !

Stay with us if you didn't : we'll install nginx inside a docker container !

## Neat Stuff
Now we're done with basic setup and security : it's time to add some good stuff :


*  [Docker](https://docs.docker.com/get-started/) -- and `dind : docker in docker`
*  [Nginx](https://nginx.org/en/docs/) -- in docker, as `reverse proxy`
*  [Jenkins](https://www.jenkins.io/doc/)

[Docker](https://docs.docker.com/get-started/)  is the most used container service ever, lighter than VM's : it enables consistent configuration and settings, scalability and portability of our code and production build. `dind : docker in docker`.

[Nginx](https://nginx.org/en/docs/) is a blazing-fast `web server` with `reverse proxy` features to enable us to redirect services running on different `port` to a `sub-domain, link or page` or our `website` so we can have for example : `blog. example.com` and `example.com/jenkins` or `jenkins.example.com` by specifying suitable configuration to `nginx`.

[Jenkins](https://www.jenkins.io/doc/) is powerful and flexible standalone [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) solution, substituable with [github action](https://github.com/features/actions), [gitlab](https://docs.gitlab.com/ee/ci/) or [travis](https://travis-ci.org/), which we'll use to create pipelines to build apps from git repo for each commit, and copy/paste resulting build over ssh to our server.

### 1.  Docker
#### Docker Engine
To start, we uninstall all previous potential instal by running :
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

Then, we update repository lists and install dependencies for the install process :
```bash
sudo apt-get update

sudo apt-get install \
	ca-certificates \
    curl \
    gnupg \
    lsb-release
```

We download docker gpg key and add it to our local keyring :
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Now from keyring, we add repository for our architecture :
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Finally, we install `docker` :
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

#### Docker Compose
Docker compose enables seemless setup of multi-containers apps, also reffered as "stack" throught a file `docker-compose.yml` where you pass secrets and parameters.

This script directly download `docker-compose` for your linux architecture :
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Now,  `chmod` the resulting binaries with write access :
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

