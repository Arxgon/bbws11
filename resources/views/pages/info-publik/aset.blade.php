@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Aset Sumber Daya Air')

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
<x-jumbotron name="Aset Sumber Daya Air" />
<x-running-text />

<x-bread-crumb name="Aset Sumber Daya Air" />

<div class="container container-xl-custom py-3">
    <p class="text-4 text-end">*Informasi Lebih Lanjut dapat mengunjungi aplikasi WRDC : <a href="https://pdsda.sda.pu.go.id"> pdsda.sda.pu.go.id</a></p>
    <div class="row">
        <div class="col-12 col-lg-12">
            <div class="row counters with-borders">
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Wilayah Sungai</strong>
                        <div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0120221121115154.png"
                            alt="Wilayah Sungai" width="70px"><div></div> 
                            <a  href="{{ route('info-publik.asetws') }}" 
                            class="text-primary text-7"data-append="">1 WS</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Daerah Irigasi</strong>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1020230922104244-1.png"
                            alt="Daerah Irigasi" width="70px"><div></div> 
                            <a href="{{ route('info-publik.asetdirigasi') }}" 
                            class="text-primary text-7" data-append="">8 DI</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary">
                        <strong class="text-primary text-5">Embung</strong><div></div> 
                        <img src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0520221121115236.png" alt="Embung"
                            width="70px"><div></div> 
                            <a href="{{ route('info-publik.asetembung') }}" 
                            class="text-primary text-7" data-append="">16 Buah</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-4">Daerah Aliran Sungai</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0220221121115212.png"
                            alt="Daerah Aliran Sungai" width="70px"> <div></div>
                            <a href="{{ route('info-publik.asetdas') }}" 
                            class="text-primary text-7" data-append="">19 DAS</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary">
                        <strong class="text-primary text-5">Bendungan</strong><div></div> <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0720221121115243.png"
                            alt="Bendungan" width="70px"><div></div> 
                            <a href="{{ route('info-publik.asetbendungan') }}"
                            class="text-primary text-7" data-append="">10 unit</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                            <strong class="text-primary text-5">Bendung</strong>
                            <div></div><img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0820221121115249.png" alt="Bendung"
                            width="70px"><div></div>
                            <a href="{{ route('info-publik.asetbendung') }}" 
                            class="text-primary text-7" data-append="">14 Unit</a>

                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                    <strong  class="text-primary text-5">Pengaman Pantai</strong>
                        <div></div> <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1120221121115339.png"
                            alt="Pengaman Pantai" width="70px"> 
                            <div></div>
                            <a href="{{ route('info-publik.asetppantai') }}"
                            class="text-primary text-7" data-append="" >18 lokasi</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary">
                        <strong class="text-primary text-4">Pengendali Sedimen</strong><div></div> 
                        <img src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/2620221121115637.png"
                            alt="Pengendali Sedimen" width="70px"> <div></div>
                            <a 
                            class="text-primary text-7" data-append="">220 Unit</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Pengendali Banjir</strong>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/3020231114212140-1.png"
                            alt="Pengendali Banjir" width="70px"> <div></div>
                            <a href="{{ route('info-publik.asetpbanjir') }}" 
                            class="text-primary text-7" data-append="">21 Unit</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Sungai</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0320230606114037-1.png"
                            alt="Sungai" width="70px"> <div></div>
                            <a 
                            class="text-primary text-7" data-append="">1007 Sungai</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Tampungan Alami</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/0420221121115228.png"
                            alt="Tampungan Alami" width="70px"> <div></div>
                            <a href="{{ route('info-publik.asettalami') }}" 
                            class="text-primary text-7" data-append="">101 Buah</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Pos Curah Hujan</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1220221121115348.png"
                            alt="Pos Curah Hujan" width="70px"> <div></div>
                            <a href="{{ route('info-publik.asetpchujan') }}" 
                            class="text-primary text-7" data-append="">38 Buah</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Pos Duga Air</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/1320221121115402.png"
                            alt="Pos Duga Air" width="70px"> <div></div> 
                            <a href="{{ route('info-publik.asetpdair') }}"
                            class="text-primary text-7" data-append="">29 Buah</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">Sumur</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/2120230606114113-1.png" alt="Sumur"
                            width="70px"> <div></div> 
                            <a 
                            class="text-primary text-7" data-append="">282 Unit</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary">
                        <strong class="text-primary text-5">Mata Air</strong><div></div> 
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/2220221121115536.png"
                            alt="Mata Air" width="70px"> <div></div>
                            <a 
                            class="text-primary text-7" data-append="">7 Buah</a>

                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary">
                        <strong class="text-primary text-5">Intake Sungai</strong><div></div> <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/2320230127092940-1.png"
                            alt="Intake Sungai" width="70px"><div></div> 
                            <a 
                            class="text-primary text-7" data-append="">7 Unit</a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4 mb-lg-5">
                    <div class="counter counter-primary"> 
                        <strong class="text-primary text-5">PAH &amp; ABSAH</strong><div></div>
                        <img
                            src="https://pdsda.sda.pu.go.id/media/infrastruktur/logo/2420221121115617.png"
                            alt="PAH &amp; ABSAH" width="70px"><div></div> 
                            <a 
                            class="text-primary text-7" data-append="">34 Buah</a>

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
