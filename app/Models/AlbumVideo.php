<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlbumVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
    ];

    public function galleryVideos()
    {
        return $this->belongsToMany(GalleryVideo::class);
    }
}
