cp .env.example .env
cd docker && docker-compose up --build -d
docker exec -i tixel-php-fpm bash -c "cd /application && php artisan key:generate"
