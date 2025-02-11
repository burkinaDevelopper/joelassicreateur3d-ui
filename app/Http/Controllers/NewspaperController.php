<?php

namespace App\Http\Controllers;

use Str;
use Inertia\Inertia;
use App\Models\Newspaper;
use App\Mail\NewspaperMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class NewspaperController extends Controller
{
    
    
    public function destroy($token){
        $unsubscript=Newspaper::whereToken($token)->first();
        abort_if(!$unsubscript,403);
        $unsubscript->delete();
        return Inertia::render('Guest/Newspaper/Destroy');
    }

    public function store(Request $request)
    {
        // request()->validate([
        //     'email'=>['required','unique:newspapers,email'],
        //     'g-recaptcha-response'=>['required',function (string $attribute, mixed $value, Closure $fail) {
        //         $g_response=Http::asForm()->post("https://www.google.com/recaptcha/api/siteverify",[
        //             'secret'=>config('social.recaptcha.secret_key'),
        //             'response'=>$value,
        //             'remoteip'=>request()->ip()
        //         ]);
        //         if (!$g_response->json('success')) {
        //             $fail("The {$attribute} is invalid.");
        //         }
        //     },]
        // ]);
        $request->validate([
            'email'=>['required','unique:newspapers,email'],
        ]);

        $token=Str::uuid();
        $subscript=Newspaper::create([
            'email'=>request('email'),
            'token'=> $token,
        ]);
        Mail::to($subscript)->send(new NewspaperMail($subscript));
        $success='souscription reussi';
        return back()->with( 'success',$success);
    }
}
