<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->unique()->name(),
            "post_count" => $this->faker->numberBetween(1, 1000),
            "created_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            "updated_at" => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
