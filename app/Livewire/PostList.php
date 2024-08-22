<?php

namespace App\Livewire;

use App\Models\Category;
use App\Models\Post;
use Livewire\Component;
use Livewire\WithPagination;

class PostList extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $sort = 'desc';

    public $search = '';

    public $category = '';

    protected $queryString = [
        'search' => ['except' => ''],
        'category' => ['except' => '']
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
        $this->category = '';
        $this->resetPage();
    }

    public function carouselPosts()
    {
        return Post::orderBy('created_at', $this->sort)
            ->paginate(4);
    }

    public function getPostsProperty()
    {
        return Post::with('categories')
            ->when($this->activeCategory, function ($query) {
                $query->withCategory($this->category);
            })
            ->search($this->search)
            ->orderBy('created_at', $this->sort)
            ->paginate(6);
    }

    public function getActiveCategoryProperty()
    {
        if ($this->category === null || $this->category === '') {
            return null;
        }

        return Category::where('slug', $this->category)->first();
    }


    public function render()
    {
        return view('livewire.post-list', [
            'posts' => $this->posts,
            'category' => $this->category,
            'carouselPosts' => $this->carouselPosts()
        ]);
    }
}
