#!/bin/bash

echo "[System]: Update composer."
composer update

echo "[Sytsem]: Setup server."
cp .env.example .env
php artisan key:generate
FILE="./database/database.sqlite"
if [ -e $FILE ]; then
  rm ./database/database.sqlite
fi
touch ./database/database.sqlite
php artisan migrate
php artisan db:seed

echo "[System]: Setup npm."
npm install

echo "The setup is complete."
echo "Please type 'npm run watch' & 'php artisan serve' to start server."
