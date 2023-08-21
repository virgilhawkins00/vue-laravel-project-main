<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FirebaseAuthController;
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

//create user
Route::post('/user/create', [FirebaseAuthController::class, 'create']);

//login
Route::get('/user/auth', [FirebaseAuthController::class, 'auth']);
