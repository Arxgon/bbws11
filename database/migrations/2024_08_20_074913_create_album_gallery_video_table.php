<?php

use App\Models\AlbumVideo;
use App\Models\GalleryVideo;

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
        Schema::create('album_gallery_video', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(GalleryVideo::class);
            $table->foreignIdFor(AlbumVideo::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('album_gallery_video');
    }
};
