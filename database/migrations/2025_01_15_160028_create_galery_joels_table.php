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
        Schema::create('galery_joels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('thumbnail_path');
            $table->string('thumbnail_url');
            $table->string('path');
            $table->string('url');
            $table->integer('width')->default(800);
            $table->integer('height')->default(600);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galery_joels');
    }
};
