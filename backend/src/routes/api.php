<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeadlinesController;
use App\Http\Controllers\MaterialsController;
use App\Http\Controllers\ProgressController;
use App\Http\Controllers\QuestsController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TimerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/test')
->controller(TestController::class)
->group(function(){
	Route::get('/', 'test')->name('test');
});

Route::prefix('/auth')
->controller(AuthController::class)
->name('auth')
->group(function(){
    Route::post('/register', 'register')->name('register');
    Route::post('/login', 'login')->name('login');
});

Route::prefix('/reports')
->controller(ReportController::class)
->name('reports')
->group(function(){
    Route::post('/','store')->name('store');
    Route::get('/','index')->name('index');
});

Route::prefix('/progress')
->controller(ProgressController::class)
->name('progress')
->group(function () {
    Route::get('/mandalearn', 'mandalearn')->name('mandalearn');
    Route::get('/reports','quests')->name('quests');
    Route::get('/study-time', 'study-time')->name('study-time');
    Route::get('/statistics','statistics')->name('statistics');
});

Route::prefix('/materials')
->controller(MaterialsController::class)
->name('materials')
->group(function(){
    Route::post('/', 'store')->name('store');
    Route::get('/','show')->name('show');
});

Route::prefix('/quests')
->controller(QuestsController::class)
->name('quests')
->group(function(){
    Route::get('/','index')->name('index');
});

Route::prefix('/timer')
->controller(TimerController::class)
->name('timer')
->group(function(){
    Route::get('/','index')->name('index');
    Route::post('/','store')->name('store');
});

Route::prefix('/deadlines')
->controller(DeadlinesController::class)
->name('deadlines')
->group(function(){
    Route::get('/','index')->name('index');
    Route::get('/alerts','alerts')->name('alerts');
});