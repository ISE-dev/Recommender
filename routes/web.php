<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Display data list for test.
Route::get('test', 'TestController@index');

// Normal route.
Route::get('/{any}', function () {
  return view('welcome');
})->where('any', '.*');

Auth::routes();