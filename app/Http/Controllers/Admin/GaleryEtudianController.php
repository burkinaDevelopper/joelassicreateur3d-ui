<?php

namespace App\Http\Controllers\Admin;


use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\GaleryEtudiant;
use App\Http\Controllers\Controller;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\AutoEncoder;
use Str,Storage;
class GaleryEtudianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images=GaleryEtudiant::orderByDesc('created_at')->get();
        $data=[
            'images'=>$images,
        ]; 
        return Inertia::render('Admin/EtudianImage/Index',$data); 
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
            'student'=>['required','string'],
            'image'=>['required','mimes:jpg,bmp,png'],
        ]);
        if ($request->file('image')->isValid()) {
            $ext = $request->file('image')->extension();
            $name=$fileName = Str::uuid() . '.' . $ext;
            if (!Storage::exists('etudiangalery') || !Storage::exists('etudiangalery/thumbnail')) {
                Storage::makeDirectory('etudiangalery');
                Storage::makeDirectory('etudiangalery/thumbnail');
            };
            $image = Image::read($request->file('image'));
            
            $width=639;
            $height=638;

            $resized = $image->encode(new AutoEncoder(quality: 80));
            $resized->save(storage_path('app/public/etudiangalery/'.$fileName));

            $resizedthumbnail = $image->resize($width, $width)->encode(new AutoEncoder(quality: 70));
            $resizedthumbnail->save(storage_path('app/public/etudiangalery/thumbnail/'.$fileName));
            
            $thumbnail_path='etudiangalery/thumbnail/'.$name;
            $path='etudiangalery/'.$name;

            $store = GaleryEtudiant::create([
                'name' => request('name'),
                'student' => request('student'),
                'thumbnail_path'=>$thumbnail_path,
                'thumbnail_url'=>Storage::url($thumbnail_path),
                'path' => $path,
                'url' => Storage::url($path), 
                'width'=>$width, 
                'height'=>$height,  
            ]);
        }
        $message=$request->name." ajouter avec success";
        return redirect()->route('galeryetudian.index')->withSuccess($message);
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
        $title= $image =GaleryEtudiant::where('id',$id)->first();
        Storage::delete($image->path);
        Storage::delete($image->thumbnail_path);
        $image->delete();
        $message=$title->name." supprimer avec success";
        return redirect()->route('galeryetudian.index')->withSuccess($message);
    }
}
