docker network create medical-codex-net
docker stop codex-website-app
docker rm codex-website-app
docker run -p 8080:8080 --env-file=.env --network medical-codex-net --name codex-website-app codex-website-app
