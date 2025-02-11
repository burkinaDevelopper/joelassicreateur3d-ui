<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{
    Chapter,Module
};
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
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
            'module'=>['required'],
            'title'=>['required','string'],
        ]);
        $module=Module::where('id',$request->module)->first();
        $module->chapters()->create([
            'title' => request('title'),
        ]);
        $message=$request->title." ajouter avec success";
        return back()->withSuccess($message);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chapter $chapter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chapter $chapter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chapter $chapter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chapter $chapter)
    {
        $title= $chapter;
        $chapter->delete();
        $message=$title->title." supprimer avec success";
        return redirect()->route('course.index')->withSuccess($message);
    }
}
