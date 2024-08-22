@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Home')

@section('addcss')

@endsection

@section('content')

<div role="main" class="main">
    <div class="p-4 jumbotron-container d-flex align-items-center flex-column">
        <div class="p-4 mw-75 d-flex justify-content-center align-items-center flex-column">
            <img src="{{asset('assets/img/bbws.png')}}" alt="BBWS" width="350px">
            <p class="text-center text-light text-6">Portal Resmi Balai Besar Wilayah Sungai Citarum</p>
            <div class="search-container w-100">
                <form role="search" action="{{ route('search') }}" method="get">
                    <div class="input-group">
                        <div class="input-group-prepend " style="outline:none;">
                            <span class="bg-white input-group-text border-right-0">
                                <i class="fas fa-search text-muted"></i>
                            </span>
                        </div>
                        <input  class="form-control search-input" placeholder="Apa yang Anda cari?" name="search" type="search" value="">
                        <div class="input-group-append">
                            <button class="btn search-button" type="submit">Cari</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    </div>

    <section
        class="pt-4 pb-0 m-0 overflow-x-hidden border-0 section section-height-3 bg-light appear-animation animated fadeIn appear-animation-visible"
        data-appear-animation="fadeIn" style="animation-delay: 100ms;">
        <div class="flex-column rounded-container d-flex">
            <div class="row h-100 item-rounded">
                <div class="col appear-animation animated fadeInUpShorter appear-animation-visible"
                    data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200"
                    style="animation-delay: 200ms;">
                    <h2 class="mx-auto mb-0 text-center w-100 font-weight-normal text-6">
                        <strong class="px-8 py-3 font-weight-extra-bold text-5"> <span class="text-primary">Berita</span> Terkini</strong>
                    </h2>
                    <hr class="mx-auto my-4 w-50 bg-primary">
                    <!-- <div class="row">
                        <div class="col-6 d-flex flex-column align-items-start">
                            <h2 class="mb-1 font-weight-normal text-6"> <strong
                                    class="font-weight-extra-bold">Berita</strong>Terkini</h2>
                        </div>
                        <div class="col-6 d-flex flex-column align-items-end justify-content-end">
                            <h4 class="mb-1 font-weight-light text-3 ">
                                <a href="{{ route('berita') }}">Lihat lainnya ... </a>
                            </h4>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="row w-100 h-100 item-rounded">
                @foreach ($latestPosts as $post)
                    <div class="col">
                        <div class="row w-100">
                            <div class="col align-self-center">
                                <a
                                    href="{{ route('berita') }}/{{ $post->slug }}"
                                    class="text-decoration-none">
                                    <img
                                        src="{{  $post->image ? asset('storage/'.$post->image) : asset('assets/img/no img.png') }}"
                                        class="mb-3 img-landing hover-effect-2"
                                        alt="{{ $post->title }}">
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 ">
                                <div class="date">
                                    <span class="border day font-weight-extra-bold">{{ date("d",strtotime($post->published_at)) }}</span>
                                    <span class="month text-2 text-uppercase">{{  date("M",strtotime($post->published_at)) }}</span>
                                </div>
                            </div>
                            <div class="col ps-1">
                                <h4 class="text-3 line-height-6">
                                    <a href="{{ route('berita') }}/{{ $post->slug }}" class="text-primary text-hover-quaternary">
                                        {{ $post->title }}
                                    </a>
                                </h4>
                                <a
                                    href="{{ route('berita') }}/{{ $post->slug }}"
                                    class="p-0 m-0 mb-3 read-more text-primary font-weight-semibold text-2">
                                    selengkapnya
                                    <i class="fas fa-chevron-right text-1 ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- video citarum --}}

    <section class="video">
        <div class="px-4 video-overlay w-100 d-flex flex-lg-row flex-column">
            <div class="flex-col px-4 text-center w-100 d-flex justify-content-center">
                <video controls autoplay class="w-100">
                    <source src="{{ asset('assets/vid/Sungai Citarum.mp4') }}" type="video/mp4" width="100%">
                </video>
            </div>
            <div class="px-4 w-100 video-desc">
                <h2 class="font-weight-extra-bold text-primary text-decoration-underline">BBWS <span class="text-quinary text-decoration-underline text-center">CITARUM</span></h2>
                <p class="justify-content-sm-between">Balai Besar Wilayah Sungai adalah Unit Pelaksana Teknis (UPT) di lingkungan Kementerian Pekerjaan Umum dan Perumahan Rakyat, berada di bawah dan bertanggung jawab kepada Direktur Jenderal Sumber Daya Air. Pembentukan BBWS Sungai Citarum ini melalui Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia Nomor 16 Tahun 2020 tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis di Kementerian Pekerjaan Umum dan Perumahan Rakyat.</p>
                <a class="btn btn-primary btn-rounded btn-3d" href="{{ route('publikasi.profil') }}" role="button">Baca Selengkapnya >></a>
            </div>
        </div>
    </section>
    <hr>
    <div class="container pt-3 mb-0">
        <div class="row">
            <div class="text-center col-lg-12" >
                <h2 class="m-auto mb-0 font-weight-normal text-6">
                    <strong class="px-8 py-4 font-weight-extra-bold text-5"> <span class="text-primary">Pelayanan</span> Publik</strong>
                </h2>
                <hr class="mx-auto my-4 w-50 bg-primary">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="pel-pub" class="pt-0 mb-0 owl-carousel owl-theme owl-loaded owl-drag owl-carousel-init"
                    style="height: auto;">
                    <div class="owl-stage-outer">
                        <div class="owl-stage"
                            style="transform: translate3d(-835px, 0px, 0px); transition: all 0.25s ease 0s; width: 2506px;">
                            <div class="owl-item cloned" style="width: 139.2px;">
                                <div class="m-4">
                                    <a class="text-center w-100" target="_blank" href="https://gol.itjen.pu.go.id/">
                                        <img style="height: 58px; width: 160px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/upg.jpg') }}"
                                            alt="Unit Pengendalian Gratifikasi"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://lapor.go.id/">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/lapor.webp"
                                            alt=" SPAN Lapor"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://jdih.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/jdih-logo.jpg"
                                            alt="JDIH"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://sigi.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/sigi-logo.gif"
                                            alt="SIGI PUPR"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="https://pdsda.sda.pu.go.id">
                                        <img width="155px" height="58px" class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/wrdc_logo.gif"
                                            alt="Pusat Data Sumber Daya Air"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://wispu.pu.go.id/">
                                        <img style="max-height: 58px; width: 58px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/wbs.jpg') }}"
                                            alt="WBS"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sinbad.sda.pu.go.id/">
                                        <img style="max-height: 110px; width: 110px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sinbad.png') }}"
                                            alt="Sistem Informasi Bendungan dan Waduk"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="http://sihka.sda.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/sihka-logo.gif"
                                            alt="Sistem Informasi Hidrologi"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sinbad.sda.pu.go.id/">
                                        <img style="max-height: 100%; width: 100%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/siatab.png') }}"
                                            alt="Sistem Informasi Air Tanah dan Air Baku"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="https://perizinansda.pu.go.id/">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/perizinan.gif"
                                            alt="Perizinan SDA"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sitaba.pu.go.id/">
                                        <img style="max-height: 120%; width: 120%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sitaba.png') }}"
                                            alt="Informasi Bencana"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sikimr.sda.pu.go.id/">
                                        <img style="max-height: 120%; width: 120%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sikimr.png') }}"
                                            alt="Kepatuhan Intern & Managemen Resiko"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sahabat.pu.go.id/eppid/">
                                        <img style="max-height: 58px; width: 58px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/eppid.jpeg') }}"
                                            alt="E-PPID PUPR"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a class="text-center w-100" target="_blank" href="https://gol.itjen.pu.go.id/">
                                        <img style="height: 58px; width: 160px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/upg.jpg') }}"
                                            alt="Unit Pengendalian Gratifikasi"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://lapor.go.id/">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/lapor.webp"
                                            alt="SPAN Lapor"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://jdih.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/jdih-logo.jpg"
                                            alt="JDIH"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4">
                                    <a target="_blank" href="https://sigi.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/sigi-logo.gif"
                                            alt="SIGI PUPR"></a>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="https://pdsda.sda.pu.go.id">
                                        <img width="155px" height="58px" class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/wrdc_logo.gif"
                                            alt="Pusat Data Sumber Daya Air"></a>
                                </div>
                            </div>

                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://wispu.pu.go.id/">
                                        <img style="max-height: 58px; width: 58px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/wbs.jpg') }}"
                                            alt="WBS"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sinbad.sda.pu.go.id/">
                                        <img style="max-height: 100px; width: 110px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sinbad.png') }}"
                                            alt="Sistem Informasi Bendungan dan Waduk"></a>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="http://sihka.sda.pu.go.id">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/sihka-logo.gif"
                                            alt="Sistem Informasi Hidrologi"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sinbad.sda.pu.go.id/">
                                        <img style="max-height: 100%; width: 100%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/siatab.png') }}"
                                            alt="Sistem Informasi Air Tanah dan Air Baku"></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a target="_blank" href="https://perizinansda.pu.go.id/">
                                        <img class="img-fluid"
                                            src="https://sda.pu.go.id/assets/templates/img/logo/perizinan.gif"
                                            alt="Perizinan SDA"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sitaba.pu.go.id/">
                                        <img style="max-height: 120%; width: 120%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sitaba.png') }}"
                                            alt="Informasi Bencana"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sikimr.sda.pu.go.id/">
                                        <img style="max-height: 120%; width: 120%; display: block; margin: auto;"
                                            src="{{ asset('assets/img/sikimr.png') }}"
                                            alt="Kepatuhan Intern & Managemen Resiko"></a>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 139.2px;">
                                <div class="m-4 text-center">
                                    <a class="text-center w-100" target="_blank" href="https://sahabat.pu.go.id/eppid/">
                                        <img style="max-height: 58px; width: 58px; display: block; margin: auto;"
                                            src="{{ asset('assets/img/eppid.jpeg') }}"
                                            alt="E-PPID PUPR"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav disabled">
                        <button type="button" role="presentation" class="owl-prev"></button>
                        <button type="button" role="presentation" class="owl-next"></button>
                    </div>
                    <div class="owl-dots disabled">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('addjs')

@endsection
