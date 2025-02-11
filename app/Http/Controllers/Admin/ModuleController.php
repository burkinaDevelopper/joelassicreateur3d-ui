<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{
    Module,Course,
};
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'id'=>['required'],
            'title'=>['required','string'],
        ]);
        $course=Course::where('id',$request->id)->first();
        $course->modules()->create([
            'title' => request('title'),
        ]);
        $message=$request->title." ajouter avec success";
        return back()->withSuccess($message);
    }

    /**
     * Display the specified resource.
     */
    public function show(Module $module)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Module $module)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Module $module)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Module $module)
    {
        $title= $module;
        $module->delete();
        $message=$title->title." supprimer avec success";
        return redirect()->route('course.index')->withSuccess($message);
    }
}
