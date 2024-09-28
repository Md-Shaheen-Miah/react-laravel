<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AppointmentController;

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
/* contact Route start */

Route::get('contact', [ContactController::class, 'index']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::get('contact/show', [ContactController::class, 'show']);
Route::delete('contact/delete/{id}', [ContactController::class, 'destroy']);

/* contact Route end */

/* appointment Route start */

Route::get('appointment', [AppointmentController::class, 'index']);
Route::post('appointment/store', [AppointmentController::class, 'store']);
Route::get('appointment/show', [AppointmentController::class, 'show']);
Route::delete('appointment/delete/{id}', [AppointmentController::class, 'destroy']);






