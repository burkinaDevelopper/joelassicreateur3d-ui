<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    use HasSlug;

    protected $guarded=['slug'];
    
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }


     public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }
     public function photos(): HasMany
    {
        return $this->hasMany(Photo::class);
    }
     public function views(): HasMany
    {
        return $this->hasMany(View::class);
    }

}
