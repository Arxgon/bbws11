@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Profil Organisasi')

@section('addcss')
@endsection

@section('content')
<x-jumbotron name="Profil Organisasi" />
<x-running-text />

<x-bread-crumb name="Profil Organisasi" />
<h4 class="text-center justify-content-center">Geser dari pojok kanan/ kiri atas</h4>
    <div class="flipbook-viewport px-5 py-3 profile-container d-flex">
        <div class="flipbook">
            <div style="background-image:url({{ asset('assets/turnjs1/0007-1.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0008-1.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0008-2.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0009-1.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0009-2.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0010-1.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0010-2.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0011-1.jpg') }})"></div>
            <div style="background-image:url({{ asset('assets/turnjs1/0011-2.jpg') }})"></div> 
            <div style="background-image:url({{ asset('assets/turnjs1/thanks.jpg') }})"></div>   
        </div>
            <div class="side-nav" style="width:30%">
        <ul class="item-nav">
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.tugas-dan-fungsi') }}">Tugas dan Fungsi</a></li>
            <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('profil.profil-organisasi') }}"><strong>Profil Organisasi</strong></a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.struktur-organisasi') }}">Struktur Organisasi</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.informasi-pejabat') }}">Informasi Pejabat</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.lokasi') }}">Lokasi Kantor</a></li>
            <hr>
        </ul>
    </div>    
    </div>
    <br>
    <h4 class="text-center justify-content-center">Geser dari pojok kanan/ kiri bawah</h4>

@endsection

@section('addjs')

@endsection
