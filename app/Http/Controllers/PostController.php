<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {

        $categories = Category::whereHas('posts')->get();

        return view(
            'pages.berita.index',
            [
                'categories' => $categories
            ]
        );
    }

    public function show(Post $post)
    {
        $categories = Category::whereHas('posts')->get();

        return view(
            'pages.berita.content',
            [
                'post' => $post,
                'categories' => $categories
            ]
        );
    }
}
