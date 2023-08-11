<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// DESPESAS

Route::get('/despesas', [\App\Http\Controllers\Despesas::class, 'index']);

Route::post('/despesas/create', [\App\Http\Controllers\Despesas::class, 'create']);

Route::get('/despesas/{despesa}', [\App\Http\Controllers\Despesas::class, 'show']);

Route::get('/despesas/{despesa}/edit', [\App\Http\Controllers\Despesas::class, 'edit']);

Route::delete('/despesas/{despesa}', [\App\Http\Controllers\Despesas::class, 'destroy']);


// USUARIOS

Route::get('/users', [\App\Http\Controllers\Usuarios::class, 'index']);

Route::get('/users/create', [\App\Http\Controllers\Usuarios::class, 'create']);

Route::get('/users/{usuario}', [\App\Http\Controllers\Usuarios::class, 'show']);

Route::get('/users/{usuario}/edit', [\App\Http\Controllers\Usuarios::class, 'edit']);

Route::get('/users/{usuario}/ban', [\App\Http\Controllers\Usuarios::class, 'ban']);

Route::delete('/users/{usuario}', [\App\Http\Controllers\Usuarios::class, 'destroy']);


// SESSÃO

Route::get('/session', [\App\Http\Controllers\Session::class, 'create']);
