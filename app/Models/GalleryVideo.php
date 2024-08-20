<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GalleryVideo extends Model
{
    use HasFactory;

    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'url',
        'description',
    ];

    public function albumVideos()
    {
        return $this->belongsToMany(AlbumVideo::class);
    }

    public function scopeWithAlbumVideo($query, string $albumVid)
    {
        $query->whereHas('albumVideos', function ($query) use ($albumVid) {
            $query->where('slug', $albumVid);
        });
    }

    public function scopeSearch($query, string $search = '')
    {
        $query->where('title', 'like', "%{$search}%");
    }
}
