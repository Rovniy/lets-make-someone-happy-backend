docker build -t lcsl .
docker logout
docker login -u xploitravy -p 69ce55f3-9f1a-4505-8078-14258c2d2af7
docker tag lcsl xploitravy/lcsl:main
docker push xploitravy/lcsl:main
