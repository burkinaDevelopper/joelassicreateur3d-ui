<?php

namespace App\Http\Controllers\Guest;

use Inertia\Inertia;
use App\Models\{
    ImageHome,
    VideoHome,
    MentorHome,
    DemoLessonHome,
    CertificationHome,
    StudentHome,
};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bg=ImageHome::inRandomOrder()->limit(1)->first();
        $video=VideoHome::inRandomOrder()->limit(1)->first();
        $mentor=MentorHome::inRandomOrder()->limit(1)->first();
        $demoLesson=DemoLessonHome::inRandomOrder()->limit(3)->get();
        $certification=CertificationHome::inRandomOrder()->limit(1)->first();
        $studentImg=StudentHome::inRandomOrder()->limit(8)->get();
        $data=[
            'bg'=>$bg,
            'video'=>$video,
            'mentor'=>$mentor,
            'demoLesson'=>$demoLesson,
            'certification'=>$certification,
            'studentImg'=>$studentImg,
        ]; 
        return Inertia::render('Guest/home/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Interview $interview)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Interview $interview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Interview $interview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interview $interview)
    {
        //
    }
}
