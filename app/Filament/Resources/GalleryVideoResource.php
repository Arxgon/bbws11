<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\AlbumVideo;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use App\Models\GalleryVideo;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Select;

use Filament\Forms\Components\Section;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms\Components\DateTimePicker;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\GalleryVideoResource\Pages;
use App\Filament\Resources\GalleryVideoResource\RelationManagers;

class GalleryVideoResource extends Resource
{
    protected static ?string $model = GalleryVideo::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Galeri';

    protected static ?string $navigationLabel = 'Video';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Main Content')->schema(
                    [
                        TextInput::make('title')
                            ->label('Judul')
                            ->required()->minLength(1)->maxLength(150)
                            ->reactive()
                            ->debounce(600)
                            ->autocomplete('off')
                            ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                if ($operation === 'edit') {
                                    return;
                                }

                                $set('slug', Str::slug($state));
                            }),
                        TextInput::make('slug')->required()->minLength(1)->unique(ignoreRecord: true)->maxLength(150),
                        TextInput::make('url')
                            ->label('youtube code')
                            ->helperText(fn() => new HtmlString('
                            Code youtube adalah kode yang tampil setelah "watch?v=" dan sebelum "&ab_channel" </br>
                            https://www.youtube.com/watch?v=<strong>WRa-38EDrZA</strong>&ab_channel=MuseIndonesia </br>
                                contoh, link diatas memiliki code <strong>WRa-38EDrZA</strong>
                            '))
                            ->required()
                            ->minLength(1)
                            ->columnSpanFull()
                            ->autocomplete('off'),
                        RichEditor::make('description')
                            ->label('Deskripsi Konten')
                            ->required()
                            ->fileAttachmentsDirectory('gallery/images')->columnSpanFull()
                    ]
                )->columns(2),
                Section::make('Album')->schema(
                    [
                        Select::make('album-video')
                            ->label('Masukan ke Album?')
                            ->multiple()
                            ->relationship('albumVideos', 'title')
                            ->searchable()
                            ->options(AlbumVideo::all()->pluck('title', 'id')),
                    ]
                ),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')->label('Judul')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleryVideos::route('/'),
            'create' => Pages\CreateGalleryVideo::route('/create'),
            'edit' => Pages\EditGalleryVideo::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
