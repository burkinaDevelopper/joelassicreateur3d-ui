<?php

namespace App\Jobs;

use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Newspaper;
use App\Mail\MarketingMail;
// implements ShouldQueue
class NotificationMarketingJob implements ShouldQueue
{
    use Queueable;

    public Collection $newspapers;
    public array $image;
    public array $datas;
   

    /**
     * Create a new job instance.
     */
    public function __construct(Collection $newspapers,$datas,$image=[])
    {
        $this->newspapers=$newspapers;
        $this->datas=$datas;
        $this->image=$image;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        foreach ($this->newspapers as $user) {
            Mail::to($user)->send(new MarketingMail($user, $this->datas, $this->image));
        }
    }
}
