---
title: "Redis in Docker"
date: "2022-05-27"
---

1. run `sudo systemctl status docker` to be sure the deamon is running.
2. pull & start a redis container  `sudo docker run --name my-first-redis -d redis`
3. check container ports with `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-first-redis`

4. open a shell in the container`sudo docker exec -it my-first-redis sh`
5. `ping`
6. `set name pnap`
7. `get name`