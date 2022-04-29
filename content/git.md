## Delete files on repository after .gitignore

1. add 'node_modules' to .gitignore file
2. git rm -r --cached node_modules
3. git commit -m 'Remove the now ignored directory node_modules'
4. git push origin <branch-name>