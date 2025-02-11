<?php

namespace App\Http\Controllers\Guest;

use Inertia\Inertia;
use App\Models\GaleryJoel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class JoelController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $images=GaleryJoel::orderByDesc('created_at')->get();
        
        $data=[
            'images'=>$images,
        ]; 
        return Inertia::render('Guest/GaleryJoel/Index',$data);
    }
}
