<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{
    Course,
};

class CoursController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $cours=Course::orderByDesc('created_at')->get();
        $facebook=config('social.facebook');
        $youtube=config('social.youtube');
        $tiktok=config('social.tiktok');
        $email=config('social.email');
        $instagram=config('social.instagram');
        $number=config('social.number');
        return response()->json([
            'coures'=> $cours,
            'socials'=>[
                'number'=>$number,
                'youtube'=>$youtube,
                'tiktok'=>$tiktok,
                'email'=>$email,
                'instagram'=>$instagram,
                'facebook'=>$facebook,
             ]
        ], 200);
    }
}
