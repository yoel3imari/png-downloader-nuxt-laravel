<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => "Sir Admin",
            'email' => "admin@pngd.com",
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole("admin");

        User::create([
            'name' => "Sir Tester",
            'email' => "tester@pngd.com",
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ]);

        User::factory(10)->create();
    }
}
