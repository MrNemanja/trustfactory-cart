<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    //Adding products to cart
    public function add(Request $request)
    {
        $user = Auth::user();
        $cart = $user->cart ?? Cart::create(['user_id' => $user->id]);

        $product = Product::findOrFail($request->product_id);

        $cartItem = $cart->items()->where('product_id', $product->id)->first();

        if ($cartItem) {
            $cartItem->quantity += $request->quantity;
            $cartItem->save();
        } else {
            $cart->items()->create([
                'product_id' => $product->id,
                'quantity' => $request->quantity,
            ]);
        }

         return response()->json(['success' => true]);
    }

    //Update product quantity
    public function update(Request $request)
    {
        $user = Auth::user();
        $cartItem = CartItem::whereHas('cart', fn($q) => $q->where('user_id', $user->id))
                            ->where('id', $request->id)
                            ->firstOrFail();

        $cartItem->quantity = $request->quantity;
        $cartItem->save();

         return response()->json(['message' => 'Quantity updated successfully'], 200);
    }

    //Remove item
    public function remove(Request $request)
    {
        $user = Auth::user();
        $cartItem = CartItem::whereHas('cart', fn($q) => $q->where('user_id', $user->id))
                            ->where('id', $request->id)
                            ->firstOrFail();

        $cartItem->delete();

        return response()->json(['message' => 'Item removed']);
    }

    //Show cart
    public function show()
    {
        $user = Auth::user();
        $cart = $user->cart?->load('items.product');

        return response()->json($cart);
    }
    
}
