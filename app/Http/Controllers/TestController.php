<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\Post;

class TestController extends Controller
{
  public function index ()
  {
    $users = User::all();
    $posts = Post::all();

    $uesrs = response()->json(['users' => $users]);
    $posts = response()->json(['posts' => $posts]);

    return [$users, $posts];
  }
}
