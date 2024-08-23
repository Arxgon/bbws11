@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Publikasi')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Rencana PSDA WS Citarum" />
<x-running-text />

<x-bread-crumb name="Rencana PSDA WS Citarum" />
<div class="py-3">
    <div class="row">
        <div class="col-12 col-lg-8">
            <div class="card border-rounded bg-color-light border-2">
                    <style>
                        #pdfview {
                            width: 95%;
                            height: 900px;
                        }
                    </style>   
                    <body>
                    <center>   <iframe id="pdfview" src="{{ asset('assets/pdf/2016_Rencana PSDA Citarum.pdf') }}" frameborder="0"></iframe>
                    </center></body>
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Rencana PSDA WS Citarum 2016</h4>
                            </div>
                            <p class="card-text ">
                                17 April
                            </p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/RENSTRA BBWS CITARUM 2020-2024_Rev5_R Combine.pdf') }}" download
                            class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-2 side-nav" style="width:30%">
            <ul class="item-nav">
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.pola') }}">Pola Wilayah Sungai</a></li>
                <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rpsda') }}"><strong>Rencana PSDA WS Citarum</strong></a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rencana') }}">Rencana Strategis BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.kinerja.lakin') }}">Laporan Kinerja BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.laporan-keuangan') }}">Laporan Keuangan BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.profil') }}">Profil BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="https://sda.pu.go.id/balai/bbwscitarum/galeri-foto?category=proyek-strategis-nasional">Proyek Strategis</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.harum') }}">Citarum Harum</a></li>
                <hr>
                <x-social-widget />
            </ul>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
