<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szakdoga extends Model
{
    use HasFactory;


    protected $fillable=[
        'szakdoga_nev',
        'githublink',
        'oldallink',
        'tagokneve'
    ];
    protected $hidden=[
        'created_at',
        'updated_at'
    ];
}
