<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GalleryImage extends Model
{
    use HasFactory;

    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'image',
        'description',
    ];

    public function albumImages()
    {
        return $this->belongsToMany(AlbumImage::class);
    }

    public function scopeWithAlbumImage($query, string $albumImages)
    {
        $query->whereHas('albumImages', function ($query) use ($albumImages) {
            $query->where('slug', $albumImages);
        });
    }

    public function scopeSearch($query, string $search = '')
    {
        $query->where('title', 'like', "%{$search}%");
    }
}
