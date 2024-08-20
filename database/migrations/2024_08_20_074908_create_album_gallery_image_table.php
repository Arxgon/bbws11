<?php

use App\Models\AlbumImage;
use App\Models\GalleryImage;

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
        Schema::create('album_gallery_image', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(GalleryImage::class);
            $table->foreignIdFor(AlbumImage::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('album_gallery_image');
    }
};
