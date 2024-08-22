<div class="col-12 col-lg-8">
    <!-- masterslider -->
    <div class="master-slider ms-skin-black-2 round-skin ms-wk mb-4" id="masterslider">
        <!-- new slide -->
        @foreach ($carouselPosts as $post)
        <div class="ms-slide blog-slider bg-dark">

            <!-- slide background -->
            <img src="{{  $post->image ? asset('storage/'.$post->image) : asset('assets/img/no img.png') }}" data-src="{{ $post->image ? asset('storage/'.$post->image) : asset('assets/img/no img.png') }}"
                alt="{{ $post->title }}" class="" style="opacity: 0.5;"/>

            <div class="blog-slider-title p-2 text-white w-100 d-flex flex-column">
                @php
                setlocale(LC_ALL, 'id-ID', 'id_ID');
                $date = strftime("%A, %d %B %Y", strtotime($post->published_at));
                @endphp
                <span class="blog-slider-posted">{{ $date }}</span>
                <h2>
                    <a
                        href="{{ route('berita') }}/{{ $post->slug }}">
                        {{ $post->title }}
                    </a>
                </h2>
            </div>

            <div class="ms-thumb">
                <p>{{ $post->title }}</p>
            </div>

        </div>

        @endforeach
        <!-- end of slide -->
    </div>
    <!-- end of masterslider -->

    <div class="blog-posts">
        <div class="row">
        @foreach ($posts as $post)
            <div class="col-sm-12 col-md-12 col-lg-6">
                <article class="post post-medium border-0 pb-0 mb-5">
                    <div class="post-image">
                        <a target="" href="{{ route('berita') }}/{{ $post->slug }}">
                            <img src="{{  $post->image ? asset('storage/'.$post->image) : asset('assets/img/no img.png') }}" class="img-landing" alt="{{ $post->title }}">
                        </a>
                    </div>
                    <div class="post-content">
                        <h4 class="font-weight-semibold text-4 line-height-6 mt-3 mb-2">
                            <a target="" href="{{ route('berita') }}/{{ $post->slug }}">
                                {{ $post->title }}
                            </a>
                        </h4>

                        <div class="post-meta row align-middle">
                            <div class="col-6">
                                <strong>
                                    @php
                                    setlocale(LC_ALL, 'id-ID', 'id_ID');
                                    $date = strftime("%A, %d %B %Y", strtotime($post->published_at));
                                    @endphp
                                    <i class="far fa-calendar"></i>{{ $date }}
                                </strong>
                            </div>
                            <div class="col-6 d-flex flex-row-reverse">
                                <a target="" href="{{ route('berita') }}/{{ $post->slug }}"
                                    class="btn btn-xs btn-primary text-1 text-uppercase btn-3d">
                                    Selengkapnya...
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        @endforeach
        </div>
    </div>

    <div class="d-flex flex-row-reverse">
        {{ $posts->onEachSide(1)->links() }}
    </div>
</div>

