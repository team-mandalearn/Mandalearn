<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Daily_log extends Model
{
    use HasFactory;

    protected $fillable = [
        "comment",
        "time",
        "user_id",
        "quest"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
