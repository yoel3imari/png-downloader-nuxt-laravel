<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
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

        return [
            "ref" => 'REF-' . $this->faker->unique()->numerify('######'),
            "size" => $this->faker->numberBetween(1, 5242880),
            "width" => $this->faker->numberBetween(1, 1024),
            "height" => $this->faker->numberBetween(1, 1024),
            "created_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            "updated_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
