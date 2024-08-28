<?php

use App\Http\Controllers\GalleryImageController;
use App\Http\Controllers\GalleryVideoController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('home');
Route::get('/berita', [PostController::class, 'index'])->name('berita');
Route::get('/berita/{post:slug}', [PostController::class, 'show'])->name('berita.show');

Route::get('/profil', function () {
    return view('pages.profil.index');
})->name('profil');
Route::get('/profil/tugas-dan-fungsi', function () {
    return view('pages.profil.tugas-dan-fungsi');
})->name('profil.tugas-dan-fungsi');
Route::get('/profil/profil-organisasi', function () {
    return view('pages.profil.profil-organisasi');
})->name('profil.profil-organisasi');
Route::get('/profil/struktur-organisasi', function () {
    return view('pages.profil.struktur-organisasi');
})->name('profil.struktur-organisasi');
Route::get('/profil/informasi-pejabat', function () {
    return view('pages.profil.informasi-pejabat');
})->name('profil.informasi-pejabat');
Route::get('/profil/lokasi-kantor', function () {
    return view('pages.profil.lokasi');
})->name('profil.lokasi');

Route::get('/aplikasi', function () {
    return view('pages.aplikasi.index');
})->name('aplikasi');

Route::get('/publikasi', function () {
    return view('pages.publikasi.index');
})->name('publikasi');

Route::get('/publikasi-perencanaan/rencana-strategis', function () {
    return view('pages.publikasi.perencanaan.index');
})->name('publikasi.rencana');
Route::get('/publikasi-perencanaan/rencana-rpsda', function () {
    return view('pages.publikasi.perencanaan.rpsda');
})->name('publikasi.rpsda');
Route::get('/publikasi-perencanaan/pola-wilayah-sungai', function () {
    return view('pages.publikasi.perencanaan.pola');
})->name('publikasi.pola');

Route::get('/publikasi-perencanaan/profil-balai', function () {
    return view('pages.publikasi.profil');
})->name('publikasi.profil');

Route::get('/publikasi-kinerja/lakin', function () {
    return view('pages.publikasi.kinerja.index');
})->name('publikasi.kinerja.lakin');
Route::get('/publikasi-kinerja/laporan', function () {
    return view('pages.publikasi.kinerja.laporan');
})->name('publikasi.kinerja.laporan');

Route::get('/publikasi/laporan-keuangan', function () {
    return view('pages.publikasi.laporan-keuangan');
})->name('publikasi.laporan-keuangan');

Route::get('/publikasi/proyek', function () {
    return view('pages.publikasi.proyek');
})->name('publikasi.proyek');

Route::get('/publikasi/harum', function () {
    return view('pages.publikasi.harum');
})->name('publikasi.harum');

Route::get('/galeri', function () {
    return view('pages.galeri.index');
})->name('galeri');
Route::get('/galeri-foto', [GalleryImageController::class, 'index'])->name('galeri.foto');
Route::get('/galeri-foto/{galleryImage:slug}', [GalleryImageController::class, 'show'])->name('galeri.foto.show');
Route::get('/galeri-video', [GalleryVideoController::class, 'index'])->name('galeri.video');
Route::get('/galeri-video/{galleryVideo:slug}', [GalleryVideoController::class, 'show'])->name('galeri.video.show');


Route::get('/info-publik', function () {
    return view('pages.info-publik.index');
})->name('info-publik');
Route::get('/info-publik/aset', function () {
    return view('pages.info-publik.aset');
})->name('info-publik.aset');
Route::get('/info-publik/tkpsda', function () {
    return view('pages.info-publik.tkpsda');
})->name('info-publik.tkpsda');
Route::get('/info-publik/pelayanan', function () {
    return view('pages.info-publik.pelayanan');
})->name('info-publik.pelayanan');
Route::get('/info-publik/maklumat', function () {
    return view('pages.info-publik.maklumat');
})->name('info-publik.maklumat');

/*------ ASET SDA ---------*/
Route::get('/info-publik/asetws', function () {
    return view('pages.info-publik.asetws');
})->name('info-publik.asetws');
Route::get('/info-publik/asetdas', function () {
    return view('pages.info-publik.asetdas');
})->name('info-publik.asetdas');
Route::get('/info-publik/asetdirigasi', function () {
    return view('pages.info-publik.asetdirigasi');
})->name('info-publik.asetdirigasi');
Route::get('/info-publik/asetembung', function () {
    return view('pages.info-publik.asetembung');
})->name('info-publik.asetembung');
Route::get('/info-publik/asetbendungan', function () {
    return view('pages.info-publik.asetbendungan');
})->name('info-publik.asetbendungan');
Route::get('/info-publik/asetbendung', function () {
    return view('pages.info-publik.asetbendung');
})->name('info-publik.asetbendung');
Route::get('/info-publik/asetppantai', function () {
    return view('pages.info-publik.asetppantai');
})->name('info-publik.asetppantai');
Route::get('/info-publik/asetpbanjir', function () {
    return view('pages.info-publik.asetpbanjir');
})->name('info-publik.asetpbanjir');
Route::get('/info-publik/asettalami', function () {
    return view('pages.info-publik.asettalami');
})->name('info-publik.asettalami');
Route::get('/info-publik/asetpchujan', function () {
    return view('pages.info-publik.asetpchujan');
})->name('info-publik.asetpchujan');
Route::get('/info-publik/asetpdair', function () {
    return view('pages.info-publik.asetpdair');
})->name('info-publik.asetpdair');

/*------ Tutup ASET SDA -----*/

/*------ Informasi Bencana -----*/
Route::get('/info-publik/informasi-bencana', function () {
    return view('pages.info-publik.informasi-bencana');
})->name('info-publik.informasi-bencana');

Route::get('/info-publik/posko-bencana', function () {
    return view('pages.info-publik.posko-bencana');
})->name('info-publik.posko-bencana');
Route::get('/info-publik/posko-pengamat-banjir', function () {
    return view('pages.info-publik.posko-pengamat-banjir');
})->name('info-publik.posko-pengamat-banjir');
Route::get('/info-publik/daerah-rawan-banjir', function () {
    return view('pages.info-publik.daerah-rawan-banjir');
})->name('info-publik.daerah-rawan-banjir');
Route::get('/info-publik/daerah-rawan-kekeringan', function () {
    return view('pages.info-publik.daerah-rawan-kekeringan');
})->name('info-publik.informasi-kekeringan');
Route::get('/info-publik/daerah-rawan-longsor', function () {
    return view('pages.info-publik.daerah-rawan-longsor');
})->name('info-publik.daerah-rawan-longsor');


/*------ Tutup Informasi Bencana -----*/
Route::get('/sistem-info', function () {
    return view('pages.sistem-info.index');
})->name('sistem-info');

Route::get('/faq', function () {
    return view('pages.faq.index');
})->name('faq');

Route::get('/pencarian', [SearchController::class, 'index'])->name('search');

Route::get('generate', function () {
    \Illuminate\Support\Facades\Artisan::call('storage:link');
    echo 'ok';
});
