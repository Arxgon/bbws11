<?php

namespace App\Http\Controllers;

use App\Models\AlbumVideo;
use App\Models\GalleryVideo;
use Illuminate\Http\Request;

class GalleryVideoController extends Controller
{
     public function index()
    {
        $categories = AlbumVideo::whereHas('galleryVideos')->get();

        return view(
            'pages.galeri.video.index',
            [
                'categories' => $categories
            ]
        );
    }

    public function show(GalleryVideo $galleryVideo)
    {
        $categories = AlbumVideo::whereHas('galleryVideos')->get();
        return view(
            'pages.galeri.video.content',
            [
                'galleryVideo' => $galleryVideo,
                'categories' => $categories
            ]
        );
    }
}
