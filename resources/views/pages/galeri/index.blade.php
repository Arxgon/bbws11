@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Galeri')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Galeri" />
<x-running-text />

<x-bread-crumb name="galeri" />

<div class="container py-3">
    <ul>
        <li>
            <a href="{{ route('galeri.foto') }}">Foto</a>
        </li>
        <li>
            <a href="{{ route('galeri.video') }}">Video</a>
        </li>
    </ul>
</div>
@endsection

@section('addjs')

@endsection
