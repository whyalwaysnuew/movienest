<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/prototype/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('prototype')->group(function(){
    Route::get('/login', function(){
        return inertia::render('Prototype/Login');
    })->name('prototype.login');

    Route::get('/register', function(){
        return inertia::render('Prototype/Register');
    })->name('prototype.register');

    Route::get('/dashboard', function(){
        return inertia::render('Prototype/Dashboard');
    })->name('prototype.dashboard');
});

require __DIR__.'/auth.php';
