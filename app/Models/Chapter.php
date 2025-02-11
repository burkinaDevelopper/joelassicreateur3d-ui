<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chapter extends Model
{
    protected $guarded=[];
    
    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }
}
