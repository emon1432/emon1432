<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Khairul Islam Emon',
                'email' => 'e.mon143298@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$GVdD6WbXg5Q3qRBrHSvktO7BYxcNd2S486qUMcB4xFxEnPa7vpEcu',
                'two_factor_secret' => NULL,
                'two_factor_recovery_codes' => NULL,
                'two_factor_confirmed_at' => NULL,
                'remember_token' => NULL,
                'current_team_id' => NULL,
                'profile_photo_path' => NULL,
                'created_at' => '2024-06-12 16:33:03',
                'updated_at' => '2024-06-12 16:33:03',
            ),
        ));
        
        
    }
}