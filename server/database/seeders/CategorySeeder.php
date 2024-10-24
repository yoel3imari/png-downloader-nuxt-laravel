<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            "Abstract",
            "Animals",
            "Architecture",
            "Art",
            "Automotive",
            "Backgrounds",
            "Beauty",
            "Business",
            "Cartoons",
            "Celebrities",
            "Cities",
            "Comics",
            "Computer",
            "Concept Art",
            "Crafts",
            "Culture",
            "Dance",
            "Design",
            "Digital Art",
            "Education",
            "Entertainment",
            "Family",
            "Fantasy",
            "Fashion",
            "Film",
            "Fitness",
            "Food",
            "Games",
            "Gardens",
            "Geography",
            "Health",
            "History",
            "Holiday",
            "Home",
            "Illustrations",
            "Industry",
            "Interiors",
            "Landscapes",
            "Love",
            "Macro",
            "Medical",
            "Military",
            "Minimalism",
            "Music",
            "Nature",
            "News",
            "Nightlife",
            "Painting",
            "Patterns",
            "People",
            "Performing Arts",
            "Photography",
            "Places",
            "Plants",
            "Politics",
            "Portraits",
            "Quotes",
            "Religion",
            "Retro",
            "Rural",
            "Science",
            "Seasons",
            "Space",
            "Sports",
            "Still Life",
            "Street",
            "Technology",
            "Textures",
            "Theater",
            "Travel",
            "Typography",
            "Underwater",
            "Urban",
            "Vehicles",
            "Vintage",
            "Visual Arts",
            "War",
            "Water",
            "Weather",
            "Wedding",
            "Wildlife",
            "Work",
            "Yoga",
            "Aerial",
            "Animals (Pets)",
            "Animals (Wildlife)",
            "Boats",
            "Bridges",
            "Buildings",
            "Cemeteries",
            "Doors",
            "Fences",
            "Fireworks",
            "Forests",
            "Lakes",
            "Mountains",
            "Oceans",
            "Rivers",
            "Skies",
            "Sunsets",
            "Waterfalls",
            "Windows",
        ];

        $categories = array_unique($categories);

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'post_count' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
