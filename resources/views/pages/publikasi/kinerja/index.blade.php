@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Laporan Kinerja')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Laporan Kinerja" />
<x-running-text />

<x-bread-crumb name="Laporan Kinerja" />

<div class="py-1">
    <div class="row">
        <div class="col-12 col-lg-8">
            <div class="card border-rounded bg-color-light border-2">
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Laporan Kinerja BBWS Citarum Tahun 2023</h4>
                            </div>
                            <p class="card-text ">20 April 2024</p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/Lakin 2023 bbws citarum.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a>
                            <a href="{{ asset('assets/pdf/Lakin 2023 bbws citarum.pdf') }}" lihat
                                class="btn btn-rounded btn-3d btn-info mb-2"><i class=" fa fa-eye"></i> Lihat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card border-rounded bg-color-light border-2">
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Laporan Kinerja BBWS Citarum Tahun 2022</h4>
                            </div>
                            <p class="card-text ">20 April 2024</p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/LAKIN 2022 BBWS CITARUM.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a>
                            <a href="{{ asset('assets/pdf/LAKIN 2022 BBWS CITARUM.pdf') }}" lihat
                            class="btn btn-rounded btn-3d btn-info mb-2"><i class=" fa fa-eye"></i> Lihat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card border-rounded bg-color-light border-2">
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Laporan Kinerja BBWS Citarum Tahun 2021</h4>
                            </div>
                            <p class="card-text ">20 April 2024</p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/LAKIN 2021 BBWS CITARUM simurp ver.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a>
                            <a href="{{ asset('assets/pdf/LAKIN 2021 BBWS CITARUM simurp ver.pdf') }}" lihat
                            class="btn btn-rounded btn-3d btn-info mb-2"><i class=" fa fa-eye"></i> Lihat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card border-rounded bg-color-light border-2">
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Laporan Kinerja BBWS Citarum Tahun 2020</h4>
                            </div>
                            <p class="card-text ">20 April 2024</p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/LAKIN 2020 BBWS CITARUM modernisasi ver.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a>
                            <a href="{{ asset('assets/pdf/LAKIN 2020 BBWS CITARUM modernisasi ver.pdf') }}" lihat
                                class="btn btn-rounded btn-3d btn-info mb-2"><i class=" fa fa-eye"></i> Lihat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-nav" style="width:30%">
            <ul class="item-nav">
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.pola') }}">Pola Wilayah Sungai</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rpsda') }}">Rencana PSDA WS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.rencana') }}">Rencana Strategis BBWS Citarum</a></li>
                <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('publikasi.kinerja.lakin') }}"><strong>Laporan Kinerja BBWS Citarum</strong></a></li>
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
