@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Lokasi Kantor')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Lokasi Kantor" />
<x-running-text />

<x-bread-crumb name="Lokasi Kantor" />

<div class="px-5 py-3">
    <div class="row">
        <div class="col-12 col-lg-8">
            <h1>Lokasi Kantor BBWS Citarum</h1>
            <hr>
            <div class="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5153090336553!2d107.66930337573986!3d-6.948376768025039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2a75bc7e2f3%3A0xd91e40072eba9c8c!2sBalai%20Besar%20Wilayah%20Sungai%20Citarum!5e0!3m2!1sid!2sid!4v1713409715933!5m2!1sid!2sid"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="py-2 side-nav" style="width:30%">
            <ul class="py-1 item-nav">
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.tugas-dan-fungsi') }}">Tugas dan Fungsi</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.profil-organisasi') }}">Profil Organisasi</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.struktur-organisasi') }}">Struktur Organisasi</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.informasi-pejabat') }}">Informasi Pejabat</a></li>
                <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('profil.lokasi') }}"><strong>Lokasi Kantor</strong></a></li>
                <hr>
                <x-social-widget />
            </ul>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
