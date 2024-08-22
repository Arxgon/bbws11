<?php

namespace App\Livewire;

use App\Models\AlbumImage;
use App\Models\GalleryImage;
use Livewire\Component;
use Livewire\WithPagination;

class ImageList extends Component
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

    public function getGalleryImagesProperty()
    {
        return GalleryImage::with('albumImages')
        ->when($this->activeCategory, function ($query) {
                $query->withAlbumImage($this->category);
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

        return AlbumImage::where('slug', $this->category)->first();
    }


    public function render()
    {
        return view('livewire.image-list', [
            'galleryImages' => $this->galleryImages,
        ]);
    }
}
