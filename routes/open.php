<?php

// Désactive tous les middlewares par défaut
Route::group(['middleware' => []], function() {
    Route::get('/totally-open', function() {
        return response()
            ->json(['status' => 'open'])
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', '*');
    });
});