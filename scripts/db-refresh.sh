#!/usr/bin/env sh
dir=$(pwd)
project=$(echo $dir | tr "/" "\n" | tail -1 | tr '[:upper:]' '[:lower:]')
ip=$(docker inspect ${proejct}_database_1 | grep IPAddress | tail -1 | tr -s ' ' | tr -d ',' | cut -d' ' -f3 | tr -d '"')

mysql -uhomestead -psecret -h$ip homestead < ./scripts/db-clean.sql 

docker-compose exec app php artisan migrate:refresh --seed

#mysqldump -uhomestead -psecret -h$ip homestead > db.sql
