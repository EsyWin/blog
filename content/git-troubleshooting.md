# Git Troubleshooting

## Delete files on repository after .gitignore

1. add 'node_modules' to .gitignore file
2. git rm -r --cached node_modules
3. git commit -m 'Remove the now ignored directory node_modules'
4. git push origin <branch-name>

## My local files are broken

Your code is now broken, and you have no idea what's wrong ? I got your back !

To revert your local files to your your last commit, you can run either `git reset --hard`  to reset to  `HEAD` or   `git checkout -- .` as you prefer : I personally use the first one. 

## SSH permission denied
If you get `permission denied` run `eval "$(ssh-agent -s)"` to ensure your ssh deamon is running, then add your ssh key by running `ssh-add /path/to/key`.

You need to add your ssh key for each new terminal session !

