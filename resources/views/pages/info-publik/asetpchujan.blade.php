@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Pos Curah Hujan')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Pos Curah Hujan" />
<x-running-text />

<x-bread-crumb name="Pos Curah Hujan" />

<div class="container px-0 py-3 profile-container d-flex">
    <div class="p-4 row">
        <div class="col-12 col-lg-12">
            <hr>
            <!-- Post Content -->
            <a href="{{ asset('assets/img/Pos Curah Hujan.jpg') }}"
                rel="prettyPhoto">
                <img class="img-fluid" src="{{ asset('assets/img/Pos Curah Hujan.jpg') }}">
            </a>
        </div>
    </div>
    <div class="py-2 side-nav" style="width:30%">
        <ul class="py-2 item-nav">
            <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.aset') }}"><strong>Aset Sumber Daya Air</strong></a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.tkpsda') }}">TKPSDA WS Citarum</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="#">Sistem Informasi H3</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="#">Informasi Bencana</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.pelayanan') }}">Standar Pelayanan</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.maklumat') }}">Maklumat Pelayanan</a></li>
            <hr>
            <x-social-widget />
        </ul>
    </div>
</div>
@endsection

@section('addjs')

@endsection