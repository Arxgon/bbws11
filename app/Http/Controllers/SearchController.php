<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {

        $categories = Category::whereHas('posts')->get();

        return view(
            'pages.search',
            [
                'categories' => $categories
            ]
        );
    }
}
