<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Video;

class VideoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $videos=Video::orderByDesc('created_at')->get();
        $data=[
            'videos'=>$videos,
        ]; 
        return Inertia::render('Guest/Video/Index',$data);
    }
}
