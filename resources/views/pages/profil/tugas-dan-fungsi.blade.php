@extends('layouts.app')

@section('title', 'BBWS-CITARUM | Tugas dan Fungsi')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="Tugas dan Fungsi" />
<x-running-text />

<x-bread-crumb name="Tugas dan Fungsi" />

<div class="px-5 py-3 d-flex">
    <div class="p-4 row">
        <div class="col-12 col-lg-12">
            <h1>Tugas dan Fungsi BBWS CITARUM </h1>
            <hr>
            <!-- Post Content -->
            <div class="artikel">
                <div class="WordSection1">
                    <p style="text-align:justify">&nbsp;</p>

                    <p style="text-align:justify">
                        <span style="font-size:16px"><strong>TUGAS</strong></span>
                    </p>

                    <p style="text-align:justify">Berdasarkan Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor 16 Tahun 2020 Tentang Organisasi dan Tata Kerja
                    Unit Pelaksana Teknis di Kementerian Pekerjaan Umum dan Perumahan Rakyat, Balai Besar Wilayah Sungai Citarum memiliki
                    tugas melaksanakan pengelolaan sumber daya air di wilayah sungai yang meliputi penyusunan program, pelaksanaan
                    konstruksi, operasi dan pemeliharaan dalam rangka konservasi dan pendayagunaan sumber daya air dan pengendalian daya
                    rusak air pada sungai, pantai, bendungan, danau, situ, embung, dan tampungan air lainnya, irigasi, rawa, tambak, air
                    tanah, air baku, serta pengelolaan drainase utama perkotaan.</p>
                </div>

                <hr>

                <p style="text-align:justify">
                    <span style="font-size:16px"><strong>FUNGSI</strong></span>
                </p>
                <p style="text-align:justify">Dalam melaksanakan tugas sebagaimana dimaksud di atas, Balai Besar Wilayah Sungai Citarum menyelenggarakan fungsi:</p>
                <ol>
                <li>penyusunan pola pengelolaan sumber daya air dan rencana pengelolaan sumber daya air pada wilayah sungai;</li>
                <li>penyusunan program pengelolaan sumber daya air dan rencana kegiatan pengelolaan sumber daya air pada wilayah sungai;</li>
                <li>pemantauan dan evaluasi penyelenggaraan atau penerapan pola pengelolaan sumber daya air dan rencana pengelolaan sumber daya air;</li>
                <li>penyusunan studi kelayakan dan perencanaan teknis atau desain pengembangan sumber daya air;</li>
                <li>pelaksanaan pengadaan barang dan jasa sesuai dengan ketentuan peraturan perundang-undangan;</li>
                <li>pelaksanaan sistem manajemen keselamatan dan kesehatan kerja;</li>
                <li>pengelolaan sumber daya air yang meliputi konservasi sumber daya air, pendayagunaan sumber daya air, dan pengendalian daya rusak air pada wilayah sungai;</li>
                <li>pengelolaan drainase utama perkotaan;</li>
                <li>pengelolaan sistem hidrologi;</li>
                <li>pengelolaan sistem informasi sumber daya air;</li>
                <li>pelaksanaan operasi dan pemeliharaan sumber daya air pada wilayah sungai;</li>
                <li>pelaksanaan pemberian bimbingan teknis pengelolaan sumber daya air yang menjadikewenangan provinsi dan kabupaten/kota;</li>
                <li>penyusunan dan penyiapan rekomendasi teknis dalam pemberian izin penggunaan sumber daya air pada wilayah sungai;</li>
                <li>penyusunan dan penyiapan saran teknis untuk pengalihan alur sungai dan pemanfaatan bekas sungai;</li>
                <li>penyusunan dan pelaksanaan kajian penetapan garis sempadan sungai, garis sempadan danau, garis sempadan situ, dan garis sempadan jaringan irigasi;</li>
                <li>fasilitasi kegiatan tim koordinasi pengelolaan sumber daya air pada wilayah sungai;</li>
                <li>pemberdayaan masyarakat dalam pengelolaan sumber daya air;</li>
                <li>pelaksanaan penyusunan laporan akuntansi keuangan dan akuntansi barang milik negara selaku unit akuntansi wilayah;</li>
                <li>pelaksanaan pemungutan, penerimaan, dan penggunaan biaya jasa pengelolaan sumber daya air sesuai dengan ketentuan peraturan perundang-undangan;</li>
                <li>pelaksanaan urusan tata usaha dan rumah tangga balai serta komunikasi publik;</li>
                <li>penyusunan perjanjian kinerja dan laporan kinerja balai; dan</li>
                <li>pelaksanaan pemantauan dan pengawasan penggunaan sumber daya air dan penyidikan tindak pidana bidang sumber daya air.</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="py-2 side-nav" style="width:30%">
        <ul class="py-2 item-nav">
            <li class="active"><i class="fas fa-play text-primary"></i><a href="{{ route('profil.tugas-dan-fungsi') }}"><strong>Tugas dan Fungsi</strong></a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.profil-organisasi') }}">Profil Organisasi</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.struktur-organisasi') }}">Struktur Organisasi</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.informasi-pejabat') }}">Informasi Pejabat</a></li>
            <li><i class="fas fa-play text-primary"></i><a href="{{ route('profil.lokasi') }}">Lokasi Kantor</a></li>
            <hr>
            <x-social-widget />
        </ul>
    </div>
</div>
@endsection

@section('addjs')

@endsection
