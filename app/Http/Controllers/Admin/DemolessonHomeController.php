<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\DemoLessonHome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\AutoEncoder;
use Str,Storage;

class DemolessonHomeController extends Controller
{
    /**
     * Display a listing of the resource. DemoLessonHome homedemolesson
     */ 
    public function index()
    {
        $images= DemoLessonHome::orderByDesc('created_at')->get();
        $data=[
            'images'=>$images,
        ];
        return Inertia::render('Admin/HomeDemoLesson/Index',$data); 
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
            'image'=>['required','mimes:jpg,bmp,png'],
        ]);
        if ($request->file('image')->isValid()) {
            $ext = $request->file('image')->extension();
            $name=$fileName = Str::uuid() . '.' . $ext;
            if (!Storage::exists('home') || !Storage::exists('home/thumbnail')) {
                Storage::makeDirectory('home');
                Storage::makeDirectory('home/thumbnail');
            }
            $image = Image::read($request->file('image'));
            $imageL = Image::read($request->file('image'));

            $resizedImageL = $imageL->resize(387,243)->encode(new AutoEncoder(quality: 90));
            $resizedImage = $image->resize(300,200)->encode(new AutoEncoder(quality: 20));
            
            $resizedImageL->save(storage_path('app/public/home/'.$fileName));
            $ss= $resizedImage->save(storage_path('app/public/home/thumbnail/'.$fileName));
            $path='home/'.$name;
            $thumbnail_path='home/thumbnail/'.$name;
            $store = DemoLessonHome::create([
                'name' => request('name'),
                'thumbnail_path'=>$thumbnail_path,
                'thumbnail_url'=>Storage::url($thumbnail_path),
                'path' => $path,
                'url' => Storage::url($path),  
            ]);
        }
        $message=$request->name." ajouter avec success";
        return redirect()->route('homedemolesson.index')->withSuccess($message);
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
        $title= $image =DemoLessonHome::where('id',$id)->first();
        Storage::delete($image->path);
        Storage::delete($image->thumbnail_path);
        $image->delete();
        $message=$title->name." supprimer avec success";
        return redirect()->route('homedemolesson.index')->withSuccess($message);
    }
}
