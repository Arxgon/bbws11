<?php

namespace App\Livewire;

use App\Models\GalleryImage;
use App\Models\GalleryVideo;
use App\Models\Post;
use Livewire\Component;

class SearchList extends Component
{
    public $sort = 'desc';

    public $search = '';

    protected $queryString = [
        'search' => ['except' => '']
    ];

    public function setSort($sort)
    {
        $this->sort = ($sort === 'desc') ? 'desc' : 'asc';
    }

    public function updateSearch($search)
    {
        $this->search = $search;
        $this->resetPage();
    }

    public function clearFilters()
    {
        $this->search = '';
        $this->resetPage();
    }

    public function getSearchDataProperty()
    {
        $posts = Post::with('categories')
        ->search($this->search)
        ->orderBy('created_at', $this->sort)
        ->get();

        $images = GalleryImage::with('albumImages')
        ->search($this->search)
        ->orderBy('created_at', $this->sort)
        ->get();

        $videos = GalleryVideo::with('albumVideos')
        ->search($this->search)
        ->orderBy('created_at', $this->sort)
        ->get();

        return [$posts, $images, $videos];
    }

    public function render()
    {
        return view('livewire.search-list', [
            'searchData' => $this->searchData
        ]);
    }
}
