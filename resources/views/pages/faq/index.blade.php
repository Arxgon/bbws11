@extends('layouts.app')

@section('title', 'BBWS-CITARUM | FAQ')

@section('addcss')

@endsection

@section('content')
<x-jumbotron name="FAQ" />
<x-running-text />

<x-bread-crumb name="FAQ" />

<div class="container py-3">
    <div class="row">
        <!-- ##### Accordians ##### -->
        <div class="col-12 col-lg-8" element-id="178">
            <!-- Title -->
            <h1 element-id="177">Frequently Asked Questions </h1>
            <p element-id="176">Berikut daftar pertanyaan yang paling sering diajukan kepada kami:</p>
            <hr element-id="175">
            <div class="toggle toggle-primary m-0" data-plugin-toggle="" element-id="174">
                <section class="toggle active" element-id="173"> <a class="toggle-title" element-id="172">Apa yang
                        dimaksud dengan Informasi Publik ?</a>
                    <div class="toggle-content" style="display: block;" element-id="171">
                        <p element-id="170">Informasi Publik adalah informasi yang dihasilkan, disimpan, dikelola,
                            dikirim, dan/atau diterima oleh suatu Badan Publik yang berkaitan dengan penyelenggara dan
                            penyelenggaraan negara dan/atau penyelenggara dan penyelenggaraan Badan Publik lainnya yang
                            sesuai dengan Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik serta
                            informasi lain yang berkaitan dengan kepentingan publik.</p>
                    </div>
                </section>
                <section class="toggle" element-id="169"> <a class="toggle-title" element-id="168">Apakah Tugas dan
                        Fungsi BBWS Citarum?</a>
                    <div class="toggle-content" element-id="167">
                        <p element-id="166"> Anda dapat membacanya   <a href="https://sda.pu.go.id/balai/bbwscitarum/profil/tugas-dan-fungsi"
                                target="_blank" class="btn btn-3d btn-info btn-xs" element-id="165">di sini</a> </p>
                    </div>
                </section>
                <section class="toggle" element-id="164"> <a class="toggle-title " element-id="163">Apakah seluruh
                        Informasi Publik adalah informasi yang dapat diakses oleh Publik ?</a>
                    <div class="toggle-content" element-id="162">
                        <p element-id="161">Ya. Seluruh Informasi Publik dapat diakases oleh masyarakat, kecuali
                            informasi yang dikecualikan/rahasia. <br element-id="160"> Anda dapat memperolehnya melalui
                            Layanan Informasi Publik   <a href="https://pelayananpublik.pu.go.id/" target="_blank"
                                class="btn btn-3d btn-info btn-xs" element-id="159">di sini</a> </p>
                    </div>
                </section>
                <section class="toggle" element-id="164"> <a class="toggle-title " element-id="163">Dimana saya dapat
                        mengunduh Pola Pengelolaan Sumber Daya Air Wilayah Sungai Citarum?</a>
                    <div class="toggle-content" element-id="162">
                        <p element-id="161">Anda dapat membaca dan mengunduhnya    <a href="https://sda.pu.go.id/balai/bbwscitarum/publikasi-perencanaan/pola-wilayah-sungai" target="_blank"
                                class="btn btn-3d btn-info btn-xs" element-id="159">di sini</a> </p>
                    </div>
                </section>
                <section class="toggle" element-id="158"> <a class="toggle-title" element-id="157">Bagaimana memperoleh
                        informasi Layanan Perizinan Sumber Daya Air</a>
                    <div class="toggle-content" element-id="156">
                        <p element-id="155"> Operasional Layanan </p>
                        <ul element-id="154">
                            <li element-id="153">Tempat Pelayanan <ul element-id="152">
                                    <li element-id="151">Unit Pelayanan Perizinan, <br element-id="150">Balai Besar Wilayah Sungai Citarum,
                                    <br element-id="149">Jl. Inspeksi Cidurian Soekarno-Hatta STA 5600 Cipamokolan Rancasari Bandung 40292 </li>
                                </ul>
                            </li>
                            <li element-id="145">Jadwal dan Waktu Pelayanan Unit Pelayanan Perizinan <ul
                                    element-id="144">
                                    <li element-id="143">Senin s.d. Kamis : 09.00 s.d 15.30 WIB (Ishoma 12.00-13.00 WIB)
                                    </li>
                                    <li element-id="142">Jumat : 09.00 s.d. 16.00 (Ishoma 11.30-13.30)</li>
                                </ul>
                            </li>
                            <li element-id="141">Media Layanan <ul element-id="140">
                                    <li element-id="139">unitpelayananperizinansda@gmail.com</li>
                                    <li element-id="138">Website : <a href="https://satusinta.id/"
                                            target="_blank" element-id="137">https://satusinta.id/</a> </li>
                                    <li element-id="136">Alamat : Balai Besar Wilayah Sungai Citarum,
                                    <br element-id="135">Jl. Inspeksi Cidurian Soekarno-Hatta STA 5600 Cipamokolan Rancasari Bandung 40292 </li>
                                    <li element-id="134">Telepon : (021) 739-8614</li>
                                </ul>
                            </li>
                        </ul>
                        <p element-id="133">Untuk Informasi Lebih lengkap silahkan membacanya <a
                                href="https://satusinta.id/" target="_blank" class="btn btn-3d btn-info btn-xs"
                                element-id="132">di sini</a> </p>
                    </div>
                </section>
            </div>

        </div>
    </div>
</div>
@endsection

@section('addjs')

@endsection
