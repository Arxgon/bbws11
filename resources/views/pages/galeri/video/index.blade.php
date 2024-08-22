@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Galeri Video')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Galeri Video" />
<x-running-text />

<x-bread-crumb name="galeri Video" />

<div class="container py-3">
    <div class="row">
        <livewire:video-list />
        <div class="col-12 col-lg-4">
            <aside class="sidebar">
                <form action="" method="get">
                    <div class="input-group mb-3 pb-1">
                        <input class="form-control text-1" placeholder="Cari galeri video" name="search" value="" type="text">
                        <button type="submit" class="btn btn-dark text-1 p-2">
                            <i class="fas fa-search m-2"></i>
                        </button>
                    </div>
                </form>
                <h3 class="font-weight-semi-bold pt-4 text-3">Album</h3>
                <ul class="nav nav-list flex-column mb-5">
                    @foreach ($categories as $category)
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('galeri.video', ['category' => $category->slug]) }}">
                            {{ $category->title }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </aside>
            <div class="card" style="padding-bottom: 0;">
                <x-social-widget />
            </div>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
