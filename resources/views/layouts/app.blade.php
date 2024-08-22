<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('layouts.partials.header')

    <body class="antialiased">
        @include('layouts.partials.navbar')
        @yield('hero')

        <main>
            @yield('content')
        </main>

        @include('layouts.partials.footer')

        @stack('modals')

        @livewire('notifications')
    </body>
</html>
