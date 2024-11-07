<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'angkasa',
            'email' => 'angkasa@gmail.com',
            'password' => bcrypt('12345678')
        ]);

        $user = User::create([
            'name' => 'nebula',
            'email' => 'nebula@gmail.com',
            'password' => bcrypt('12345678')
        ]);

        $admin->assignRole('admin');
        $user->assignRole('user');
    }
}
