## clone and setup

To create your development environment [follow these instructions](https://laravel.com/docs/11.x/installation).

Setting up your development environment on your local machine:

```bash
$ git clone https://github.com/Arxgon/bbws11.git
$ cd bbws11
$ composer update
$ cp .env.example .env
$ php artisan key:generate
$ php artisan storage:link
$ php artisan migrate
$ php artisan make:filament-user
```

## log
21/8 - done cp BE

## Deployment Test

## FAQ

1. Kenapa Laravel 11?

| Version PHP (\*) | Release             | Bug Fixes Until     | Security Fixes Until |
| ---------------- | ------------------- | ------------------- | -------------------- |
| 9 8.0 - 8.2      | February 8th, 2022  | August 8th, 2023    | February 6th, 2024   |
| 10 8.1 - 8.3     | February 14th, 2023 | August 6th, 2024    | February 4th, 2025   |
| 11 8.2 - 8.3     | March 12th, 2024    | September 3rd, 2025 | March 12th, 2026     |
| 12 8.2 - 8.3     | Q1 2025             | Q3, 2026            | Q1, 2027             |

End of life - v 9
Security fixes only - v 10
https://laravel.com/docs/11.x/releases

2. Kenapa Filament?
   Mempercepat proses pembuatan admin panel 80% lebih cepat.

## Development Process Plan

1. Initiate laravel (use laravel 11)
2. Setup mysql db
<ol>
    <li>a. Change the env, from sqlite to mysql. Uncommand the db user setup in env.</li>
    <li>b. Run ```php artisan migrate```</li>
</ol>

3. Add filament package (https://filamentphp.com/docs/3.x/panels/installation)
a. Run ```composer require filament/filament:"^3.2" -W```
b. Run ```php artisan filament:install –panels```
c. Create filament user, run ```php artisan make:filament-user```
d. Increase performance
i. Run ```php artisan icons:cache```
ii. Run ```php artisan filament:cache-components```
e. Define who can access the filament panel (read the docs: https://filamentphp.com/docs/3.x/panels/users#authorizing-access-to-the-panel)
f. Publish the config, run ```php artisan vendor:publish --tag=filament-config```
4. Create migration initiation
a. ```php artisan make:model Category -mf```
b. ```php artisan make:model Post -mfc```
c. ```php artisan make:model AlbumImage -mf```
d. ```php artisan make:model AlbumVideo -mf```
e. ```php artisan make:model GalleryImage -mfc```
f. ```php artisan make:model GalleryVideo -mfc```
g. ```php artisan make:migration create_category_post_table```
h. ```php artisan make:migration create_album_gallery_image_table```
i. ```php artisan make:migration create_album_gallery_video_table```
\*(-mfc -> migration, factory, controller)
5. Create table from migration depends on ERD
6.  Run migration (```php artisan migrate```)
7. Edit the models, add rules, relationships and fillable
8. Link the storage, run ```php artisan storage:link``` (make sure app_url is correct in env)
9. Set filament resources
a. ```php artisan make:filament-resource Category --simple –generate```
b. ```php artisan make:filament-resource User --generate --soft-deletes```
c. ```php artisan make:filament-resource Post --generate --soft-deletes```
d. ```php artisan make:filament-resource AlbumImage --simple –generate```
e. ```php artisan make:filament-resource AlbumVideo --simple –generate```
f. ```php artisan make:filament-resource GalleryImage --generate --soft-deletes```
g. ```php artisan make:filament-resource GalleryVideo --generate --soft-deletes```
10. Create filament form and table
