@props([
    'name' => 'Beranda',
    'imgUrl' => 'https://sda.pu.go.id/balai/bbwscitarum/assets/img/header.jpg'
])

<section
    class="page-header page-header-modern page-header-background page-header-background-md overlay overlay-color-quaternary overlay-show overlay-op-8 mb-0"
    style="border-bottom : 10px solid #FFC928 ;background-image: url({{ $imgUrl }});display:block;object-fit:cover;background-position: center; background-size: cover; ">
    <div class="container">
        <div class="row">
            <div class="col align-self-center p-static ">
                <h1><strong>{{ $name }}</strong></h1>
            </div>
        </div>
    </div>
</section>
