<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\{
    ImageHomeController,
    GaleryJoelController,
    GaleryEtudianController,
    AlbumController,MentorHomeController,
    PhotoController,DemolessonHomeController,
    VideoController,CertificationHomeController,
    ModuleController,StudentHomeController,
    CourseController,
    ChapterController,
    MarketingController,
    VideoHomeController,
    BannerHomeController,
    
};
use App\Http\Controllers\Guest\{
    HomeController,EtudianController,
    JoelController,ProjetController,
    VideoController as VideosController,
    CourController,ContactController
};
use App\Http\Controllers\{
    NewspaperController,
};
use App\Http\Controllers\Api\CoursController;


Route::middleware(['nocors'])->prefix('api')->group(function () {
    Route::get('/global-data', CoursController::class);
});

Route::middleware(['auth', 'role'])->group(function () {
    Route::resource('/homeimage', ImageHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homebanner', BannerHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homementor', MentorHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homedemolesson',DemolessonHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homecertification',CertificationHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homestudent',StudentHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/homevideo', VideoHomeController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/galeryjoel', GaleryJoelController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/galeryetudian', GaleryEtudianController::class)->only([
        'index','destroy','store'
    ]);
    Route::resource('/album', AlbumController::class);
    Route::resource('/photo', PhotoController::class);
    Route::resource('/video', VideoController::class);
    Route::resource('/course', CourseController::class);
    Route::resource('/module', ModuleController::class);
    Route::resource('/chapter', ChapterController::class);
    Route::resource('/marketing', MarketingController::class);
});

Route::resource('/', HomeController::class);
Route::resource('/newspaper', NewspaperController::class);
Route::post('newspaper',[NewspaperController::class,'store'])->name('newspaper.store');
Route::get('unsubscribe/{newspaper}',[NewspaperController::class,'destroy'])->name('unsubscribe.destroy');
Route::get('/galery-joel', JoelController::class)->name('galery-joel');
Route::get('/galery-etudiant', EtudianController::class)->name('galery-etudiant');
Route::resource('/albums', ProjetController::class);
Route::get('/videos', VideosController::class)->name('videos');
Route::resource('/cours', CourController::class);
Route::resource('/contact', ContactController::class);
Route::get('/popup',[ContactController::class,'popup'])->name('popup');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('home');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'role'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
