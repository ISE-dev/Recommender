#!/bin/bash

echo "[System]: Update composer."
composer update

echo "[Sytsem]: Setup server."
cp .env.example .env
php artisan key:generate
touch ./database/database.sqlite
php artisan migrate
php artisan db:seed

echo "[System]: Setup npm."
npm install

echo "The setup is complete."
echo "Please type 'npm run watch' & 'php artisan serve' to start server."
