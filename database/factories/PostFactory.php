<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
  $date = \Carbon\Carbon::now();
  return [
    'title' => $faker->word,
    'body' => $faker->realText(50),
    'category' => $faker->word,
    'user_id' => $faker->numberBetween(1, 10)
  ];
});
