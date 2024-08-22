@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Hasil Pencarian')

@section('addcss')

<style>
    .blog-post figure a img {
        max-width: 100% !important;
        height: auto;
    }
</style>
@endsection

@section('content')
<x-jumbotron name="Hasil Pencarian" />
<x-running-text />

<x-bread-crumb name="PENCARIAN" />

<div class="container py-3">
    <div class="row">

        <div class="col-lg-8">
            <h2>
                <i class="fa fa-search fa-sm" aria-hidden="true"></i>
                Hasil Pencarian :
                {{ htmlspecialchars($_GET["search"]) }}
            </h2>
            <div class="col-lg-12 btn-group" role="group">
                <a class="btn btn-quaternary btn-outline text-4" href="#section1" data-hash="" data-hash-offset="90">
                    <i class="far fa-newspaper"></i>
                    Berita
                </a>
                <a class="btn btn-quaternary btn-outline text-4 " href="#section2" data-hash="" data-hash-offset="90">
                    <i class="fas fa-images"></i>
                    Foto
                </a>
                <a class="btn btn-quaternary btn-outline text-4" href="#section3" data-hash="" data-hash-offset="90">
                    <i class="fas fa-photo-video"></i>
                    Video
                </a>
            </div>
            <hr>
            <div class="container">
                <livewire:search-list />
            </div>
        </div>

        <div class="col-12 col-lg-4">
            <aside class="sidebar">
                <form action="{{ route('berita') }}" method="get">
                    <div class="input-group mb-3 pb-1">
                        <input class="form-control text-1" placeholder="Cari berita" name="search" value="" type="text"
                            wire:model='search'>
                        <button type="submit" class="btn btn-dark text-1 p-2" wire:click='update'>
                            <i class="fas fa-search m-2"></i>
                        </button>
                    </div>
                </form>
                <h3 class="font-weight-semi-bold pt-4 text-3">Kategori</h3>
                <ul class="nav nav-list flex-column mb-5">
                    @foreach ($categories as $category)
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('berita', ['category' => $category->slug]) }}">
                            {{ $category->title }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </aside> <!-- Widget -->

            <div class="card" style="padding-bottom: 0;">
                <x-social-widget />
            </div>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
