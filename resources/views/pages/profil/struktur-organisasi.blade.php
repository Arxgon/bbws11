@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Struktur Organisasi')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Struktur Organisasi" />
<x-running-text />

<x-bread-crumb name="Struktur Organisasi" />

<div class="px-1 py-3 profile-container d-flex">
    <div class="p-4 row">
        <div class="col-12 col-lg-12">
            <h1>Struktur Organisasi BBWS CITARUM</h1>
            <hr>
            <!-- Post Content -->
            <a href="{{ asset('assets/img/Struktur Organisasi.jpg') }}"
                rel="prettyPhoto">
                <img class="img-fluid" src="{{ asset('assets/img/Struktur Organisasi.jpg') }}">
            </a>
        </div>
    </div>
    <div class="py-2 side-nav" style="width:30%">
        <ul class="py-1 item-nav">
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.tugas-dan-fungsi') }}">Tugas dan Fungsi</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.profil-organisasi') }}">Profil Organisasi</a></li>
            <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('profil.struktur-organisasi') }}"><strong>Struktur Organisasi</strong></a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.informasi-pejabat') }}">Informasi Pejabat</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.lokasi') }}">Lokasi Kantor</a></li>
            <hr>
            <x-social-widget />
        </ul>
    </div>
</div>
@endsection

@section('addjs')

@endsection
