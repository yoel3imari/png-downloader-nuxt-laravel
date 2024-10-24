<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique(); // from title + datetime in s
            $table->string('title');
            $table->text('description');
            $table->unsignedInteger('visit_count')->default(0); // increment on show
            $table->unsignedInteger('download_count')->default(0); // increment on download
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('image_id')->constrained('images')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
