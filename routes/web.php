<?php

use App\Http\Controllers\Backend\PortfolioController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('frontend.pages.home.index');
})->name('home');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {
        return view('backend.pages.dashboard.index');
    })->name('dashboard');
});

Route::get('/migrate', function () {
    Artisan::call('migrate:fresh --seed');
    notify()->success('Database migration has been completed successfully.');
    return redirect('login');
})->name('migration');

Route::get('/clear', function () {
    Artisan::call('optimize:clear');
    notify()->success('Cache has been cleared successfully.');
    return redirect()->back();
})->name('clear-cache');

Route::get('/composer', function () {
    exec('composer update');
    exec('composer dump-autoload');
    notify()->success('Composer update has been completed successfully.');
    return redirect()->back();
})->name('composer');

Route::get('/iseed', function () {
    $tables = DB::select('SHOW TABLES');
    $prevent_tables = ['failed_jobs', 'migrations', 'password_reset_tokens', 'personal_access_tokens', 'sessions'];
    foreach ($tables as $table) {
        $table_name = 'Tables_in_' . env('DB_DATABASE');
        $table_name = $table->$table_name;
        if (!in_array($table_name, $prevent_tables))
            Artisan::call('iseed ' . $table_name . ' --force');
    }
    notify()->success('Database seed has been created successfully.');
    return redirect()->back();
})->name('iseed');
