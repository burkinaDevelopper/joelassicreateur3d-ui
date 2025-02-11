<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Module extends Model
{
    protected $guarded=[];
    
    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class);
    }
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
