<?php

namespace App\Http\Controllers\Admin;

use Str,Storage,DB;
use Inertia\Inertia;
use App\Models\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Laravel\Facades\Image;


class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videos=Video::orderByDesc('created_at')->get();
        $data=[
            'videos'=>$videos,
        ]; 
        return Inertia::render('Admin/Video/Index',$data); 
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
            'image'=>['required'],
            'video'=>['required'],
        ]);
        if ($request->file('video')->isValid() && $request->file('image')->isValid()) {
            $ext = $request->file('image')->extension();
            if (!Storage::exists('video')) {
                Storage::makeDirectory('video');
            };
            $name=$fileName = Str::uuid() . '.' . $ext;
            $image = Image::read($request->file('image'));
            $resizedImage = $image->resize(1280, 1280);
            $resizedImage->save(storage_path('app/public/video/'.$fileName));
            $img_path='video/'.$name;


            $ext = $request->file('video')->extension();
            $name=$fileName = Str::uuid() . '.' . $ext;
            if (!Storage::exists('video')) {
                Storage::makeDirectory('video');
            };
            $path = $request->file('video')->storeAs('video', $fileName);
            $store = Video::create([
                'name' => request('name'),
                'imgpath' => $img_path,
                'imgurl' => Storage::url($img_path),  
                'path' => $path,
                'url' => Storage::url($path),  
            ]);
        }
        $message=$request->name." ajouter avec success";
        return redirect()->route('video.index')->withSuccess($message);
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
    public function destroy(Video $video)
    {
        $title= $video;
        Storage::delete($video->path);
        Storage::delete($video->imgpath);
        $video->delete();
        $message=$title->name." supprimer avec success";
        return redirect()->route('video.index')->withSuccess($message);
    }
}
