<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Newspaper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\NotificationMarketingJob;
use DB,Storage,Str;
use App\Mail\MarketingMail;
use Illuminate\Support\Facades\Mail;
class MarketingController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     */
       

    public function index()
    {
        $emails=Newspaper::orderByDesc('created_at')->paginate(10);
        $data=[
            'emails'=>$emails,
        ]; 
        return Inertia::render('Admin/Marketing/Index',$data); 
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
        request()->validate([
            'sujet'=>['required'],
        ]);
        DB::beginTransaction();
        try {
            $sujet=request('sujet');
            $message1=request('message1');
            $message2=request('message2');
            $lis=request('li');
           
            $title=request('title');
            $users=Newspaper::all();
            $when=now()->addSeconds(10);

            $lis = explode(',', request('li'));

            $lis = collect($lis)->filter(function($value, $key){
                return $value != ' ' && $value !='';
            })->all();
            $datas=[
                'sujet'=>$sujet,
                'message1'=>$message1,
                'lis'=>$lis,
                'title'=>$title,
                'message2'=>$message2,
            ];

            if ($request->hasFile('image')) {
                $ext=$request->file('image')->extension();
                $imageName=Str::uuid().'.'.$ext;
                $path=$request->file('image')->storeAs('emailMarketing',$imageName);
               
                $image=[
                    'path'=>$path,
                    'url'=>Storage::url($path),
                ];
                  DB::afterCommit(fn()=>NotificationMarketingJob::dispatch($users,$datas,$image)->delay($when));
               // DB::afterCommit(fn()=>NotificationMarketingJob::dispatch($users,$datas,$image));
             
            }else{
                  DB::afterCommit(fn()=>NotificationMarketingJob::dispatch($users,$datas)->delay($when));
                // DB::afterCommit(fn()=>NotificationMarketingJob::dispatch($users,$datas));
            }

           
        } catch (ValidationExecption $e) {
            dd($e->getErrors());
            DB::rollback();
        }
        DB::commit();
       
       
        return back()->withSuccess('Email envoiyer a tout les utilisateur');
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
        //
    }
}
