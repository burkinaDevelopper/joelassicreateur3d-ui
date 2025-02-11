<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\Laravel\Facades\Image;
use App\Models\Album;
use App\Models\Photo;
use Str,Storage;

class PhotoController extends Controller
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
            'image'=>['required','mimes:jpg,bmp,png'],
        ]);
        if ($request->file('image')->isValid()) {
            $ext = $request->file('image')->extension();
            if (!Storage::exists('album') || !Storage::exists('album/photo')) {
                Storage::makeDirectory('album');
                Storage::makeDirectory('album/photo');
            };
            $name=$fileName = Str::uuid() . '.' . $ext;
            $image = Image::read($request->file('image'));
            $resizedImage = $image->resize(1100, 800);
            $resizedImage->save(storage_path('app/public/album/photo/'.$fileName));
            
            $path='album/photo/'.$name;
            $album=Album::where('id',$request->id)->first();
            $album->photos()->create([
                'title' => request('title'),
                'path' => $path,
                'url' => Storage::url($path),  
            ]);
        }
        $message=$request->title." ajouter avec success";
        return back()->withSuccess($message);
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
    public function destroy(Photo $photo)
    {
        $title= $photo;
        Storage::delete($photo->path);
        $photo->delete();
        $message=$title->title." supprimer avec success";
        return redirect()->route('album.index')->withSuccess($message);
    }
}
