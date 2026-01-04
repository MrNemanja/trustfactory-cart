<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          Product::insert([
            ['name' => 'T-shirt', 'price' => 19.99, 'stock_quantity' => 20, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Shoes', 'price' => 49.99, 'stock_quantity' => 15, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Shorts', 'price' => 14.99, 'stock_quantity' => 30, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Scarf', 'price' => 39.99, 'stock_quantity' => 10, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cap', 'price' => 9.99, 'stock_quantity' => 50, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pants', 'price' => 29.99, 'stock_quantity' => 25, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Socks', 'price' => 4.99, 'stock_quantity' => 100, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
