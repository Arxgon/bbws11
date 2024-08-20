<?php

namespace App\Filament\Resources\AlbumImageResource\Pages;

use App\Filament\Resources\AlbumImageResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageAlbumImages extends ManageRecords
{
    protected static string $resource = AlbumImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
