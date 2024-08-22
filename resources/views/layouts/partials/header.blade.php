<head>
    <script type="text/javascript" id="mobile-simulator">
        window.hasMobileFirstExtension = true;
    </script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="application-name" content="{{ config('app.name') }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <link rel="icon" href="{{ asset('assets/img/org-logo.png') }}">

    <!-- Meta Tag -->
    <meta name="keywords" content="Direktorat Jenderal Sumber Daya Air, PU,SDA,DITJEN SDA, air, sumber daya air">
    <meta name="description" content="Direktorat Jenderal Sumber Daya Air mempunyai tugas menyelenggarakan perumusan dan pelaksanaan kebijakan di bidang pengelolaan sumber daya air sesuai dengan ketentuan peraturan perundang-undangan.">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link id="googleFonts" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap" rel="stylesheet" type="text/css">

    {{-- VENDOR CSS --}}
    {{-- <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap-grid.min.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/animate/animate.compat.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/simple-line-icons/css/simple-line-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/owl.carousel/assets/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/owl.carousel/assets/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/magnific-popup/magnific-popup.min.css') }}">
    {{-- THEME CSS --}}
    <link rel="stylesheet" href="{{ asset('css/theme/sda/theme.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme/sda/theme-elements.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme/sda/theme-blog.css') }}">
    {{-- THEME SKIN CSS --}}
    <link rel="stylesheet" href="{{ asset('css/theme/skins/skin-corporate-5.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme/sda/custom.css') }}">

    <script src="{{ asset('js/turnJs/extras/modernizr.2.5.3.min.js') }}"></script>
    @yield('addcss')
    @stack('scripts')
    @livewireStyles
    @livewireScripts
</head>
