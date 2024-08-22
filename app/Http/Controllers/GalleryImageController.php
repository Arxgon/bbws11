<?php

namespace App\Http\Controllers;

use App\Models\AlbumImage;
use App\Models\GalleryImage;
use Illuminate\Http\Request;

class GalleryImageController extends Controller
{
    public function index()
    {
        $categories = AlbumImage::whereHas('galleryImages')->get();

        return view(
            'pages.galeri.foto.index',
            [
                'categories' => $categories
            ]
        );
    }

    public function show(GalleryImage $galleryImage)
    {
        $categories = AlbumImage::whereHas('galleryImages')->get();

        return view(
            'pages.galeri.foto.content',
            [
                'galleryImage' => $galleryImage,
                'categories' => $categories
            ]
        );
    }
}
