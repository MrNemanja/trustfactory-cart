<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    
    if (Auth::check()) {
       
        return redirect()->route('products.page');
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});


Route::middleware('auth')->group(function () {

     Route::get('/products', function() {
        return Inertia::render('Products/Index');
    })->name('products.page');

     Route::get('/cart', function () {
        return Inertia::render('Cart/Index');
    })->name('cart.page');

    //Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Products
    Route::get('/cart-api/products', [ProductController::class, 'index'])->name('products.all');

    //Add Product to Cart
    Route::post('/cart-api/add-items', [CartController::class, 'add'])->name('products.add');

    //Show cart; Remove product from cart; Update quantity 
    Route::get('/cart-api/show', [CartController::class, 'show'])->name('cart.show');
    Route::delete('/cart-api/remove', [CartController::class, 'remove'])->name('cart.remove');
    Route::put('/cart-api/update', [CartController::class, 'update'])->name('cart.update');
    

});

require __DIR__.'/auth.php';
