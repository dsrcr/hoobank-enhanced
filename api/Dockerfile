FROM php:8.3-apache

# Install system dependencies
RUN apt-get update \
    && apt-get install -y \
        libzip-dev \
        unzip \
    && docker-php-ext-install zip pdo_mysql \
    && a2enmod rewrite

# Set the working directory
WORKDIR /var/www/html

# Copy the composer.json and composer.lock files
COPY composer.json composer.lock ./

# Install Composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer install --no-scripts --no-autoloader

# Copy the rest of the application code
COPY . .

# Install Composer dependencies (again) with autoloader
RUN composer install --optimize-autoloader --no-scripts

# Set up Symfony cache and permissions
RUN php bin/console cache:clear --no-debug --no-warmup \
    && php bin/console cache:warmup

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
