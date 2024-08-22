@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Posko Pengamat Banjir')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Posko Pengamat Banjir" />
<x-running-text />

<x-bread-crumb name="Posko Pengamat Banjir" />

<div class="container px-0 py-3 profile-container d-flex">
    <div class="p-4 row">
        <div class="col-12 col-lg-12">
            <h1>Posko Pengamat Banjir </h1>
            <hr>
            <!-- Post Content -->
                        <a rel="prettyPhoto">
                <img class="img-fluid" src="{{ asset('assets/img/XXX.jpg') }}">
            </a>

            <style>
                #pdfview {
                    width: 75%;
                    height: 650px;
                }
            </style>
            <hr>
            <center>   <iframe id="pdfview" src="{{ asset('assets/pdf/XXX.pdf') }}" frameborder="0"></iframe>
            </center></body>
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