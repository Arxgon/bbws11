@props([
    'name' => 'Beranda',
])

<section class="page-header bg-color-light border-bottom border-width-2 pt-3">
    <div class="container">
        <div class="row">
            <div class="col align-self-center p-static">
                <ul class="breadcrumb d-block">
                    <li>
                        <a href="/">
                            <i class="fas fa-home"></i> Beranda
                        </a>
                    </li>
                    <li class="active">{{ $name }}</li>
                </ul>
            </div>
        </div>
    </div>
</section>
