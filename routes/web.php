<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('frontend.pages.home.index');
})->name('home');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {
        return view('backend.pages.dashboard.index');
    })->name('dashboard');
});
