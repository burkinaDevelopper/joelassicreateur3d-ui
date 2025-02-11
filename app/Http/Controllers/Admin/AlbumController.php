<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\AutoEncoder;
use App\Models\Album;
use Str,Storage,DB;
class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $albums=Album::With('photos','votes','views')->orderByDesc('created_at')->get();
        $data=[
            'albums'=>$albums,
        ]; 
        return Inertia::render('Admin/Album/Index',$data); 
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
            'description'=>['required','string'],
            'image'=>['required','mimes:jpg,bmp,png'],
        ]);
        DB::beginTransaction();
        try {
            if ($request->file('image')->isValid()) {
                $ext = $request->file('image')->extension();
                if (!Storage::exists('album')) {
                    Storage::makeDirectory('album');
                };
                $name=$fileName = Str::uuid() . '.' . $ext;
                $image = Image::read($request->file('image'));
                $resizedImage = $image->resize(639, 638)->encode(new AutoEncoder(quality: 70));
                $resizedImage->save(storage_path('app/public/album/'.$fileName));
                
                $path='album/'.$name;
                $album = Album::create([
                    'title' => request('title'),
                    'path' => $path,
                    'description'=>$request->description,
                    'url' => Storage::url($path),  
                ]);
            }
        } catch (ValidationException $e) {
            DB::rollBack();
            dd($e->getErrors());
        }
        DB::commit();
        $message=$request->name." ajouter avec success";
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
    public function destroy(Album $album)
    {
        $title= $album;
        $album->delete();
        $message=$title->title." supprimer avec success";
        return redirect()->route('album.index')->withSuccess($message);
    }
}
