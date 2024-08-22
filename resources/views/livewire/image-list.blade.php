<div class="col-12 col-lg-8">
    <div class="blog-posts">
        <div class="row">
            @foreach ($galleryImages as $post)
            <div class="col-12 col-sm-6 col-lg-6 p-3">
                <span class="thumb-info thumb-info-hide-wrapper-bg thumb-gallery-foto">
                    <span class="thumb-info-wrapper">
                        <a href="{{ route('galeri.foto') }}/{{ $post->slug }}">
                            <img src="{{  asset('storage/'.$post->image) }}"
                                class="img-fluid" alt="{{ $post->title }}">
                        </a>
                        <span class="thumb-info-title">
                            <span class="thumb-info-inner">{{ $post->title }}</span>
                            @php
                            setlocale(LC_ALL, 'id-ID', 'id_ID');
                            $date = strftime("%A, %d %B %Y", strtotime($post->created_at));
                            @endphp
                            <span class="thumb-info-type">{{ $date }}</span>
                        </span>
                    </span>
                </span>
            </div>
            @endforeach
        </div>
    </div>

    <div class="d-flex flex-row-reverse">
        {{ $galleryImages->onEachSide(1)->links() }}
    </div>
</div>
