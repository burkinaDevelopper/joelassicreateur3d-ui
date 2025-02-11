<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    protected $guarded=[];
    
    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class);
    }
}
