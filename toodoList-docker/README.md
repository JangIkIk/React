# docker - install

1. https://www.docker.com/get-started/

2. mac: Download for Mac - Apple Chip
   ![다운로드](https://github.com/JangIkIk/React/assets/108041161/37dc760b-2a06-4fae-a142-f6f54b76b04d)

---

# docker - setting

1. docker images install
   
```
명령어: &docker pull <image Name>
mysql 설치: &docker pull mysql
phpMyAdmin 설치: &docekr pull phpMyAdmin
```

2. docker network
```
명령어: & docker network create <network Name>
네트워크 생성: &docker network create mysql-toodList
네트워크 상세정보: &docker inspect mysql-toodList
생성된 네트워크 목록: &docker network ls
```

3. docker container
```
명령어: docker run -d --name <컨테이너이름> --net=<도커네트워크> -p <Host Port>:<Container Port> -e <컨테이너 환경 변수> <이미지 이름>:<태그명>
Mysql 컨테이너: docker run -d --name mysqldb --net=mysql-toodList -p 3306:3306 -e MYSQL_ROOT_PASSWORD=testpasswd mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci
phpMyAdmin 컨테이너: docker run -d --name mysqladmin --net=mysql-toodList -p 8080:80 -e PMA_ARBITRARY=1 -e PMA_HOST=mysqldb -e PMA_PORT=3306 phpmyadmin
```

---

# phpMyadmin IP : http://127.0.0.1:8080
id: root
ps: testpasswd (MYSQL_ROOT_PASSWORD)

[Table column]

id(INT) title(TEXT) content(TEXT)
---



# React - Express - run

## frontend dir-> npm run start
## backend dir -> npx nodemon express.ts



