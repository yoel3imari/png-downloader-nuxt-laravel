<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionsSeeder::class,
            CategorySeeder::class,
            TagSeeder::class,
            ImageSeeder::class,
            UserSeeder::class,
            PostSeeder::class,
        ]);
    }
}
