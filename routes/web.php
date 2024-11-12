<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\SubscriptionPlanController;

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');

    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');

    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscriptionPlan.index');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('prototype')->name('prototype.')->group(function(){
    Route::get('/login', function(){
        return inertia::render('Prototype/Login');
    })->name('login');

    Route::get('/register', function(){
        return inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard', function(){
        return inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    Route::get('/movie/{slug}', function(){
        return inertia::render('Prototype/Movie/Show');
    })->name('movie.show');

});

Route::get('/subscription-plan', function(){
    return inertia::render('Prototype/SubscriptionPlan');
})->name('subscriptionPlan');


require __DIR__.'/auth.php';
