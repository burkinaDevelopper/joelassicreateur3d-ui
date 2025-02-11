<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\{
    Course,Module
};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses=Course::with(['modules','modules.chapters'])->orderByDesc('created_at')->get();
        $modules=Module::orderByDesc('created_at')->get();
        $data=[
            'courses'=>$courses,
            'modules'=>$modules,
        ]; 
        return Inertia::render('Admin/Course/Index',$data);
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
        $request->validate([
            'title'=>['required','string'],
        ]);
        $course = Course::create([
            'title' => request('title'),
        ]);
        $message=$request->title." ajouter avec success";
        return back()->withSuccess($message);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $title= $course;
        $course->delete();
        $message=$title->title." supprimer avec success";
        return redirect()->route('course.index')->withSuccess($message);
    }
}
