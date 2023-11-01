# React - Express - mysql(phpMyAdmin)

## frontend -> npm run start
## backend -> npx nodemon express.ts


[Docker]
image: mysql, phpMyAdmin

1. mysql
docker run -d --name mysqldb --net=mysql-todoList -p 3306:3306 -e MYSQL_ROOT_PASSWORD=testpasswd mysql:8 --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci

2. phpMyAdmin (root/ testpasswd)
docker run -d --name mysqladmin --net=mysql-todoList -p 8080:80 -e PMA_ARBITRARY=1 -e PMA_HOST=mysqldb -e PMA_PORT=3306 phpmyadmin
