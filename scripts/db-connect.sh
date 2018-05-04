dir=$(pwd)
project=$(echo $dir | tr "/" "\n" | tail -1 | tr '[:upper:]' '[:lower:]')

ip=$(docker inspect ${project}_database_1 | grep IPAddress | tail -1 | tr -s ' ' | tr -d ',' | cut -d' ' -f3 | tr -d '"')

mysql -uhomestead -psecret -h$ip homestead
