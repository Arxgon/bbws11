<?php

namespace App\Filament\Resources\AlbumVideoResource\Pages;

use App\Filament\Resources\AlbumVideoResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageAlbumVideos extends ManageRecords
{
    protected static string $resource = AlbumVideoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
