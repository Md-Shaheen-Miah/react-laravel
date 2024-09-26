<?php
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('contact', [ContactController::class, 'index']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::get('contact/show', [ContactController::class, 'show']);
Route::delete('contact/delete/{id}', [ContactController::class, 'destroy']);



