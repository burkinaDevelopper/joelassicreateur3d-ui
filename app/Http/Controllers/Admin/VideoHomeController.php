<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\VideoHome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Str,DB,Storage;
class VideoHomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videos=VideoHome::orderByDesc('created_at')->get();
        $data=[
            'videos'=>$videos,
        ]; 
        return Inertia::render('Admin/VideoHome/Index',$data); 
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
            'name'=>['required','string'],
            'video'=>['required'],
        ]);
        if ($request->file('video')->isValid()) {
            $ext = $request->file('video')->extension();
            $name=$fileName = Str::uuid() . '.' . $ext;
            if (!Storage::exists('home')) {
                Storage::makeDirectory('home');
            };
            $path = $request->file('video')->storeAs('home', $fileName);
            $store = VideoHome::create([
                'name' => request('name'),
                'path' => $path,
                'url' => Storage::url($path),  
            ]);
        }
        $message=$request->name." ajouter avec success";
        return redirect()->route('homevideo.index')->withSuccess($message);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video=VideoHome::whereId($id)->first();
        $title=$video;
        Storage::delete($video->path);
        $video->delete();
        $message=$title->name." supprimer avec success";
        return redirect()->route('homevideo.index')->withSuccess($message);
    }
}
