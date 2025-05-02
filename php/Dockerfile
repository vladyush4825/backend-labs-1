FROM php:8.2-cli
RUN apt-get update && apt-get install -y git unzip zip curl
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
WORKDIR /app
COPY . .
RUN composer create-project symfony/skeleton my_project_name
WORKDIR /app/my_project_name
CMD ["php", "-S", "0.0.0.0:8001", "-t", "public"]
