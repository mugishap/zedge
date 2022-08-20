<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/all', function () {
    return view('All',['page' => 'all']);
});

Route::get('/wallpapers', function () {
    return view('wallpapers',['page' => 'wallpapers']);
});

Route::get('/user', function () {
    return view('user',['page' => 'user']);
});


Route::get('/live-wallpapers', function () {
    return view('live-wallpapers',['page' => 'live-wallpapers']);
});


Route::get('/ringtones', function () {
    return view('ringtones',['page' => 'ringtones']);
});

Route::get('/signup', function () {
    return view('signup',['page' => 'signup']);
});

Route::get('/login', function () {
    return view('login',['page' => 'login']);
});
