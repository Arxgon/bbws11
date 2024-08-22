<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $latestPosts = Post::with('categories')->latest('published_at')->take(3)->get();
        // $latestPosts = Cache::remember('latestPosts', now()->addDay(), function () {
        //     return Post::published()->with('categories')->latest('published_at')->take(3)->get();
        // });

        $featuredPosts = Post::with('categories')->where('featured', '=', '1')->latest('published_at')->take(3)->get();

        return view('home', [
            'latestPosts' => $latestPosts,
            'featuredPosts' => $featuredPosts
        ]);
    }
}
