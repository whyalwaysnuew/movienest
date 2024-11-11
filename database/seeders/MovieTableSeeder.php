<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'What Happened to Monday',
                'slug' => 'what-happened-to-monday',
                'category' => 'Mystery',
                'video_url' => 'https://youtu.be/hOiWSWLt-NA?si=S2IDX8v9baMZ7QFk',
                'thumbnail' => 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
                'rating' => '8.3',
                'is_featured' => true,
            ],
            [
                'name' => '30 Days of Night',
                'slug' => '30-days-of-night',
                'category' => 'Horror',
                'video_url' => 'https://youtu.be/8ClVrVK_y0E?si=sMBVg1drCZeVwQFf',
                'thumbnail' => 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
                'rating' => '8.7',
                'is_featured' => false,
            ],
            [
                'name' => 'Us',
                'slug' => 'us-movie',
                'category' => 'Thriller',
                'video_url' => 'https://youtu.be/hNCmb-4oXJA?si=whSbNWDipO-OCzQ9',
                'thumbnail' => 'https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE',
                'rating' => '9.7',
                'is_featured' => false,
            ],
            [
                'name' => 'Get Out',
                'slug' => 'get-out',
                'category' => 'Thriller',
                'video_url' => 'https://youtu.be/DzfpyUB60YY?si=wESR2NWz__HZdUtm',
                'thumbnail' => 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
                'rating' => '8.9',
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
