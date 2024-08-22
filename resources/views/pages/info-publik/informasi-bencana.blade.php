@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Informasi Bencana')

@section('addcss')
<style>
    .add-b>li {
        font-weight: 900;
    }

    .add-b>p {
        text-align: justify;
    }
</style>
@endsection

@section('content')
<x-jumbotron name="Informasi Bencana" />
<x-running-text />

<x-bread-crumb name="Informasi Bencana" />

<div class="container container-xl-custom py-3">
    <p class="text-4 text-end">*Informasi Lebih Lanjut dapat mengunjungi aplikasi WRDC : <a href="https://pdsda.sda.pu.go.id"> pdsda.sda.pu.go.id</a></p>
    <div class="row">
        <div class="col-12 col-lg-12">
            <div class="row counters with-borders">
                <div class="col-sm-9 col-lg-6 mb-7 mb-lg-8">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Posko Bencana</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1520221121115431.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.posko-bencana') }}" 
                            class="text-primary text-7"data-append="">0 Posko</a>
                    </div>
                </div>
                <div class="col-sm-9 col-lg-6 mb-7 mb-lg-8">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Posko Pengamat Banjir</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1620230606114104-1.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.posko-pengamat-banjir') }}" 
                            class="text-primary text-7"data-append="">0 Posko</a>
                    </div>
                </div>
                <div class="col-sm-9 col-lg-6 mb-7 mb-lg-8">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Daerah Rawan Banjir</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1720221121115500.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.daerah-rawan-banjir') }}" 
                            class="text-primary text-7"data-append="">0 Posko</a>
                    </div>
                </div>
                <div class="col-sm-9 col-lg-6 mb-7 mb-lg-8">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Daerah Rawan Kekeringan</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1820221121115508.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.informasi-kekeringan') }}" 
                            class="text-primary text-7"data-append="">0 Posko</a>
                    </div>
                </div>
                <div class="col-sm-9 col-lg-6 mb-7 mb-lg-8">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Daerah Rawan Longsor</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1920221121115515.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.daerah-rawan-longsor') }}" 
                            class="text-primary text-7"data-append="">0 Posko</a>
                    </div>
                </div>
            </div>
            <div class="theme-blog-posts">
                <div class="row"> </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection







