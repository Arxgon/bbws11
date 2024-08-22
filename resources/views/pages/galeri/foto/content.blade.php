@extends('layouts.app')

@section('title', 'BBWS-CITARUM | '.$galleryImage->title)

@section('addcss')
<style>
    .blog-post figure a img {
        max-width: 100% !important;
        height: auto;
    }
</style>
@endsection

@section('content')
<x-running-text />

<div class="container py-3">
    <div class="row">
        <div class="col-12 col-lg-8">
            <!-- Title -->
            <h2>{{ $galleryImage->title }}</h2>
            <hr>
            <div class="row mb-0">
                <div class="col d-flex flex-column align-items-start">
                    <p>Album :
                        @foreach ($galleryImage->albumImages as $category)
                        <a class="font-weight-bold" href="">
                            {{ $category->title }}
                        </a>,
                        @endforeach
                    </p>
                </div>
                <div class="col d-flex flex-column align-items-end ">
                    @php
                        setlocale(LC_ALL, 'id-ID', 'id_ID');
                        $date = strftime("%A, %d %B %Y", strtotime($galleryImage->created_at));
                    @endphp
                    <p class="font-weight-bold "> {{ $date }} </p>
                </div>
            </div>
            <hr>
            <!-- Preview Image -->
            @if ($galleryImage->image)

            <img class="img-fluid rounded" src="{{  asset('storage/'.$galleryImage->image) }}" alt="{{ $galleryImage->title }}">
            <hr>
            @endif
            <!-- galleryImage Content -->

            <div class="d-flex flex-column text-justify overflow-hidden blog-galleryImage">
                {!! $galleryImage->description !!}
            </div>


        </div>
        <div class="col-12 col-lg-4">
            <aside class="sidebar">
                <form action="{{ route('galeri.foto') }}" method="get">
                    <div class="input-group mb-3 pb-1">
                        <input class="form-control text-1" placeholder="Cari galeri foto" name="search" value="" type="text">
                        <button type="submit" class="btn btn-dark text-1 p-2">
                            <i class="fas fa-search m-2"></i>
                        </button>
                    </div>
                </form>
                <h3 class="font-weight-semi-bold pt-4 text-3">Album</h3>
                <ul class="nav nav-list flex-column mb-5">
                   @foreach ($categories as $category)
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('galeri.foto', ['category' => $category->slug]) }}">
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
