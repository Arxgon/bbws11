<div class="col-12 col-lg-8">
    <div class="blog-posts">
        <div class="row">
            @foreach ($galleryVideos as $post)
            <div class="col-12 col-lg-6">
                <div class="ratio ratio-16x9 ratio-borders">
                    <iframe
                        src="https://www.youtube.com/embed/{{ $post->url }}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="row pb-3">
                    <div class="col w-100">
                        <div class="date">
                            @php
                            setlocale(LC_ALL, 'id-ID', 'id_ID');
                            $date = strftime("%A, %d %B %Y", strtotime($post->created_at));
                            @endphp
                            <span class="day">{{ $date }}</span>
                        </div>
                        <a href="{{ route('galeri.video') }}/{{ $post->slug }}" class="text-dark">
                            <h4 class="text-color-dark font-weight-extra-bold">
                                {{ $post->title }}
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>

    <div class="d-flex flex-row-reverse">
        {{ $galleryVideos->onEachSide(1)->links() }}
    </div>
</div>
