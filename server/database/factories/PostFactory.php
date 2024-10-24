<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->sentence();
        $dt = $this->faker->dateTime()->getTimestamp();

        $category = Category::inRandomOrder()->first();
        $category->increment('post_count');

        $user_id = User::inRandomOrder()->pluck('id')->first();
        $image_id = Image::inRandomOrder()->pluck('id')->first();

        return [
            "slug" => Str::slug($title) . '_' . $dt,
            "title" => $title,
            "description" => $this->faker->paragraph(),
            "visit_count" => $this->faker->numberBetween(0, 10000),
            "download_count" => $this->faker->numberBetween(0, 10000),
            "category_id" => $category->id,
            "user_id" => $user_id,
            "image_id" => $image_id,
            "created_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            "updated_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
