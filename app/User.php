<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  protected $table = 'users';
  public $timestamps = false;

  protected $fillable = [
    'user_name',
    'user_email',
    'user_password'
  ];
}
