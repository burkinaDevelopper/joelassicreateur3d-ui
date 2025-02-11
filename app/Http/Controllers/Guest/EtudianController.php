<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\GaleryEtudiant;


class EtudianController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $images=GaleryEtudiant::orderByDesc('created_at')->get();
       
        $data=[
            'images'=>$images,
        ]; 
        return Inertia::render('Guest/GaleryEtudian/Index',$data);
    }
}
