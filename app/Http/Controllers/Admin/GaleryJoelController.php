<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\GaleryJoel;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\AutoEncoder;
use Str,Storage;
class GaleryJoelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images=GaleryJoel::orderByDesc('created_at')->get();
        $data=[
            'images'=>$images,
        ];
        return Inertia::render('Admin/JoelImage/Index',$data); 
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
            if (!Storage::exists('joelgalery') || !Storage::exists('joelgalery/thumbnail')) {
                Storage::makeDirectory('joelgalery');
                Storage::makeDirectory('joelgalery/thumbnail');
            };
            $name=$fileName = Str::uuid() . '.' . $ext;
           
            $image = Image::read($request->file('image'));

            $width=639;
            $height=638;

            $resized = $image->encode(new AutoEncoder(quality: 70));
            $resized->save(storage_path('app/public/joelgalery/'.$fileName));

            $resizedthumbnail = $image->resize($width,$height)->encode(new AutoEncoder(quality: 80));
            $resizedthumbnail->save(storage_path('app/public/joelgalery/thumbnail/'.$fileName));
            
            $thumbnail_path='joelgalery/thumbnail/'.$name;
            $path='joelgalery/'.$name;
        
            $store = GaleryJoel::create([
                'name' => request('name'),
                'thumbnail_path'=>$thumbnail_path,
                'thumbnail_url'=>Storage::url($thumbnail_path),
                'path' => $path,
                'url' => Storage::url($path), 
                'width'=>$width, 
                'height'=>$height, 
            ]);
        }
        $message=$request->name." ajouter avec success";
        return redirect()->route('galeryjoel.index')->withSuccess($message);
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
        $title= $image =GaleryJoel::where('id',$id)->first();
        Storage::delete($image->path);
        Storage::delete($image->thumbnail_path);
        $image->delete();
        $message=$title->name." supprimer avec success";
        return redirect()->route('galeryjoel.index')->withSuccess($message);
    }
}
