#!/bin/bash

composer update
cp .env.example .env
php artisan key:generate
npm install
echo "The setup is complete."
echo "Please type 'php artisan serve' to start server."
