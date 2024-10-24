<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $post_id = Post::inRandomOrder()->pluck("id")->first();
        $tag_id = Tag::inRandomOrder()->pluck("id")->first();

        return [
            "post_id" => $post_id,
            "tag_id" => $tag_id,
            "created_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            "updated_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
