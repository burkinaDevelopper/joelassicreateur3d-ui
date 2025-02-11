<?php

namespace App\Http\Controllers\Guest;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\AdminNotification;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data=[
            'title'=>'title',
        ]; 
        return Inertia::render('Guest/Contact/Index',$data);
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
            'nom'=>['required','string'],
            'email'=>['required','email'],
            'message'=>['required','string'],
        ]);
        $nom=request('nom');
        $email=request('email');
        $message=request('message');
        $user=User::whereRole('admin')->first();
        $user->notify(new AdminNotification($nom,$email,$message));
        $message="Votre message a bien ete envoyer";
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
    public function destroy(string $id)
    {
        //
    }
    public function popup()
    {
        $data=[
            'title'=>'title',
        ]; 
        return Inertia::render('Guest/Contact/Popup',$data);
    }
}
