<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Album;
class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $albums=Album::with('votes','views')->orderByDesc('created_at')->get();
        $data=[
            'albums'=>$albums,
        ]; 
        return Inertia::render('Guest/AbumClient/Index',$data);
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
    public function show(string $slug)
    {
        $albu=$album=Album::where('slug',$slug)->first();
        $album->views()->create([
            'view'=>1,
        ]);
        $albu->load('votes','views','photos')->orderByDesc('created_at')->get();
        $data=[
            'album'=>$albu,
        ]; 
        return Inertia::render('Guest/AbumClient/Show',$data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $album=Album::where('slug',$slug)->first();
        $title=$album->votes()->create([
            'like' => 1,
        ]);
        $message="vous avec like avec success ".$album->title;
        return back()->withSuccess($message);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
