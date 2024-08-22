@extends('layouts.app')

@section('title', 'Maklumat Pelayanan BBWS Citarum')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Maklumat Pelayanan BBWS Citarum" />
<x-running-text />

<x-bread-crumb name="Maklumat Pelayanan BBWS Citarum" />

<div class="container py-3">
    <div class="row">
        <div class="col-12 col-lg-8">
            <div class="card border-rounded bg-color-light border-2">
                    <style>
                        #pdfview {
                            width: 100%;
                            height: 900px;
                        }
                    </style>
                    <body>
                    <center>   <iframe id="pdfview" src="{{ asset('assets/pdf/Maklumat Pelayanan BBWS Citarum.pdf') }}" frameborder="0"></iframe>
                    </center></body>
                <div class="card-body p-4">
                    <div class="row p-0">
                        <div class="col-12 col-lg-1 p-0 d-flex flex-column align-items-center align-content-center">
                            <i class="fas fa-file-pdf fa-3x text-warning align-content-center "></i>
                        </div>
                        <div class="col-12 col-lg-9 p-0">
                            <div>
                                <h4 class="card-title text-4 font-weight text-primary">Maklumat Pelayanan BBWS Citarum</h4>
                            </div>
                            <p class="card-text ">17 April 2024</p>
                        </div>
                        <div class="col-12 col-lg-2 p-0">
                            <a href="{{ asset('assets/pdf/Maklumat Pelayanan BBWS Citarum.pdf') }}" download
                                class=" btn btn-rounded btn-3d btn-success mb-2 "> <i class="fa fa-download "></i> Unduh
                            </a> 
                        </div>
                    </div>
                </div>         
            </div>
        </div>
        <div class="py-2 side-nav" style="width:30%">
            <ul class="py-2 item-nav">
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.aset') }}">Aset Sumber Daya Air</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.tkpsda') }}">TKPSDA WS Citarum</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="#">Sistem Informasi H3</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="#">Informasi Bencana</a></li>
                <li><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.pelayanan') }}">Standar Pelayanan</a></li>
                <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('info-publik.maklumat') }}"><strong> Maklumat Pelayanan</strong></a></li>
                <hr>
                <x-social-widget />
            </ul>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
