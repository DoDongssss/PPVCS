<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pets extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected $fillable = [
        'user_id',
        'picture_path',
        'name',
        'gender',
        'species',
        'breed',
        'color',
        'birthdate',
        'weight'
    ];
}
