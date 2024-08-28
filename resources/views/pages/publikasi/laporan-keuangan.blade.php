@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Publikasi')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Laporan Keuangan BBWS Citarum" />
<x-running-text />

<x-bread-crumb name="Laporan Keuangan BBWS Citarum" />

<div class="py-3">
    <div class=" p-2 row">
        <div class="col-12 col-lg-8">
            <div class="card border-rounded bg-color-light border-2">
                    <style>
                        #pdfview {
                            width: 95%;
                            height: 900px;
                        }
                    </style>   
                    <body>
                        <center>   <iframe id="pdfview" src="{{ asset('assets/pdf/CALK Wilayah Audited 2023 BBWS Citarum.pdf') }}" frameborder="0"></iframe>
                        </center>
                    </body>
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Laporan Keuangan Wilayah</h4>
                            </div>
                            <p class="card-text ">Laporan Keuangan Wilayah 
                                Untuk Periode yang Berakhir 31 Desember 2023
                                (Audited)
                            </p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/POLA PENGELOLAAN SUMBER DAYA AIR WILYAH SUNGAI CITARUM KEPMEN PUPR NOMOR 606 TAHUN 2023.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-nav" style="width:30%">
            <ul class="item-nav">
                <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.pola') }}">Pola Wilayah Sungai</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rpsda') }}">Rencana PSDA WS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rencana') }}">Rencana Strategis BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.kinerja.lakin') }}">Laporan Kinerja BBWS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.laporan-keuangan') }}"><strong>Laporan Keuangan BBWS Citarum</strong></a></li>
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
