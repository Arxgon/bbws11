<footer id="footer">
    <div class="container">
        <div class="footer-ribbon"> <span>KONTAK KAMI</span> </div>
        <div class="row pt-2 mt-4 mb-0">
            <div class="col-md-5 mb-4 mb-lg-0">
                <a href="/" class="logo">
                    <!-- <img alt="SDA" src="img/logo-footer.png" class="opacity-7 bottom-4" height="32">-->
                    <h1><strong>Balai Besar Wilayah Sungai Citarum.</strong></h1>
                </a>
                <!-- <p style="color: #fff">Alamat:</p>-->
                <span style="color: #fff"> Jl. Inspeksi Cidurian Soekarno-Hatta STA 5600 Cipamokolan,
                    <br> Rancasari, Bandung, 40292 </span>
                    <div class="row">
                        <div class="col w-full d-flex flex-column justify-content-left text-left mb-5">
                            <h5 class="text-4 mt-5">Social Media</h5>
                            <div>
                                <a href="https://twitter.com/bbwscitarum" style="color:#fff;padding-right: 10px;" target="_blank">
                                    <i class="fab fa-4x fa-twitter-square"></i>&nbsp;
                                </a>
                                <a href="https://www.instagram.com/pupr_sda_citarum/" style="color:#fff;padding-right:10px;" target="_blank">
                                    <i class="fab fa-4x fa-instagram"></i>&nbsp;
                                </a>
                                <a href="https://www.youtube.com/channel/UCxSpNzOYWiVBqObom3n9XWQ" style="color:#fff;" target="_blank">
                                    <i class="fab fa-4x fa-youtube"></i>&nbsp;
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-md-4">
                <h1 class="text-7 mb-0"><strong> STATISTIK PENGUNJUNG</strong></h1>
                <br>

                <br>
            </div>
            <div class="col-md-3 mb-lg-0">
                <h1 class="text-7 mb-3"><strong>CONTACT US</strong></h1>
                <div class="row">
                    <div class="col-md-12">
                        <ul class="list list-icons list-icons-lg">
                            {{-- <li class="mb-1"><i class="fas fa-map-marked text-white"></i>
                                <p class="m-0 text-white">Gedung Ditjen Sumber Daya Air <br>JL. Pattimura 20, Kebayoran
                                    Baru, <br> Jakarta - Indonesia - 12110 </p>
                            </li> --}}
                            <li class="mb-1"><i class="fas fa-phone text-white"></i>
                                <p class="m-0 text-white">(022) 7564073</p>
                            </li>
                            <li class="mb-1"><i class="fas fa-fax text-white"></i>
                                <p class="m-0 text-white">(022) 7505760</p>
                            </li>
                            <li class="mb-1"><i class="far fa-envelope text-white"></i>
                                <p class="m-0 ">
                                    <a class="text-white" href="mailto:bbwscitarum@pu.go.id">bbwscitarum@pu.go.id</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 class="text-7 mb-3"><strong>TAUTAN</strong></h1>
                <ul class="list list-icons list-icons-sm">
                    <li>
                        <i class="fas fa-angle-right"></i>
                        <a class="link-hover-style-1 ms-1 text-light"
                            href="https://satusinta.id/" target="_blank">SATUSINTA</a>
                    </li>
                    <a></a>
                    <li>
                        <i class="fas fa-angle-right"></i>
                        <a class="link-hover-style-1 ms-1 text-light"
                            href="https://hkabbwscitarum.higertech.com/" target="_blank">HIDROLOGI</a>
                    </li>
                    <li>
                        <i class="fas fa-angle-right"></i>
                        <a class="link-hover-style-1 ms-1 text-light"
                            href="https://www.dsdan.go.id/" target="_blank">DEWAN SUMBER DAYA AIR</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="footer-copyright">
        <div class="container py-2">
            <div class="row">
                <div class="col d-flex align-items-center justify-content-center ">
                    <p class="text-white text-center">Hak Cipta ©2024 Balai Besar Wilayah Sungai Citarum. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>

{{-- Library ⤵️--}}
{{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script> --}}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
{{-- VENDOR --}}
<script src="{{ asset('vendor/jquery.appear/jquery.appear.js') }}"></script>
<script src="{{ asset('vendor/jquery.easing/jquery.easing.min.js') }}"></script>
<script src="{{ asset('vendor/jquery.cookie/jquery.cookie.min.js') }}"></script>
<script src="{{ asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('vendor/jquery.validation/jquery.validate.min.js') }}"></script>
<script src="{{ asset('vendor/lazysizes/lazysizes.min.js') }}"></script>
<script src="{{ asset('vendor/isotope/jquery.isotope.min.js') }}"></script>
<script src="{{ asset('vendor/owl.carousel/owl.carousel.min.js') }}"></script>
<script src="{{ asset('vendor/magnific-popup/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('vendor/vide/jquery.vide.min.js') }}"></script>
<script src="{{ asset('vendor/vivus/vivus.min.js') }}"></script>
<script src="{{ asset('vendor/masterslider/masterslider.js') }}"></script>
{{-- THEME BASE, COMPONENTS, AND SETTINGS --}}
<script src="{{ asset('js/theme/theme.js') }}"></script>
{{-- THEME CUSTOM --}}
<script src="{{ asset('js/theme/custom.js') }}"></script>
{{-- THEME INITIALIZATION --}}
<script src="{{ asset('js/theme/theme.init.js') }}"></script>
@yield('addjs')
Knitted with love by Syahrul Ramadhan
