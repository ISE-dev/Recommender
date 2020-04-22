<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
  return [
    'user_name' => $faker->userName,
    'user_email' => $faker->email,
    'user_password' => $faker->password
  ];
});
