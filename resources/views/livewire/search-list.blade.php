<div class="row">
    <div id="section1" class="bg-primary text-light p-3 border-radius w-100">
        <h4 class="text-light m-0 text-5 font-weight-light">
            <i class="far fa-newspaper"></i>
            Berita
        </h4>
    </div>

    <div class="col-12 col-lg-12">
        @foreach ($searchData[0] as $post)
        <div class="row">
            <div class="col-1 d-flex flex-column justify-content-center">
                <i class="fas fa-newspaper fa-2x text-warning"></i>
            </div>
            <div class="col-11">
                <ul class="simple-post-list m-0">
                    <li>
                        <div class="post-info">
                            <a href="{{ route('berita') }}/{{ $post->slug }}" target="_blank">{{ $post->title }}</a>
                            <div class="post-meta">
                                @php
                                setlocale(LC_ALL, 'id-ID', 'id_ID');
                                $date = strftime("%A, %d %B %Y", strtotime($post->published_at));
                                @endphp
                                <span class="text-dark text-uppercase  font-weight-semibold">Berita</span>
                                | {{ $date }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        @endforeach
    </div>

    <br>
    <hr>
    <div id="section2" class="bg-primary text-light p-3 border-radius w-100">
        <h4 class="text-light m-0 text-5 font-weight-light">
            <i class="fas fa-image"></i>
            Foto
        </h4>
    </div>

    <div class="col-12 col-lg-12">
        @foreach ($searchData[1] as $post)
        <div class="row">
            <div class="col-1 d-flex flex-column justify-content-center">
                <i class="fas fa-image fa-2x text-info"></i>
            </div>
            <div class="col-11">
                <ul class="simple-post-list m-0">
                    <li>
                        <div class="post-info">
                            <a href="{{ route('galeri.foto') }}/{{ $post->slug }}" target="_blank">{{ $post->title
                                }}</a>
                            <div class="post-meta">
                                @php
                                setlocale(LC_ALL, 'id-ID', 'id_ID');
                                $date2 = strftime("%A, %d %B %Y", strtotime($post->created_at));
                                @endphp
                                <span class="text-dark text-uppercase  font-weight-semibold">Foto</span>
                                | {{ $date2 }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        @endforeach
    </div>

    <br>
    <hr>
    <div id="section3" class="bg-primary text-light p-3 border-radius w-100">
        <h4 class="text-light m-0 text-5 font-weight-light">
            <i class="fas fa-photo-video"></i>
            Video
        </h4>
    </div>

    <div class="col-12 col-lg-12">
        @foreach ($searchData[2] as $post)
        <div class="row">
            <div class="col-1 d-flex flex-column justify-content-center">
                <i class="fab fa-youtube fa-2x text-danger"></i>
            </div>
            <div class="col-11">
                <ul class="simple-post-list m-0">
                    <li>
                        <div class="post-info">
                            <a href="{{ route('galeri.video') }}/{{ $post->slug }}" target="_blank">{{ $post->title
                                }}</a>
                            <div class="post-meta">
                                @php
                                setlocale(LC_ALL, 'id-ID', 'id_ID');
                                $date3 = strftime("%A, %d %B %Y", strtotime($post->created_at));
                                @endphp
                                <span class="text-dark text-uppercase  font-weight-semibold">Video</span>
                                | {{ $date3 }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        @endforeach
    </div>
</div>
