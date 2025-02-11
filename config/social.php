<?php 
return[

    'facebook'=>env('SOCIAL_FACEBOOK'),
    'youtube'=>env('SOCIAL_YOUTUBE'),
    'tiktok'=>env('SOCIAL_TIKTOK'),
    'email'=>env('SOCIAL_EMAIL'),
    'instagram'=>env('SOCIAL_INSTAGRAM'),
    'number'=>env('SOCIAL_NUMBER'),
    
    'recaptcha'=>[
        'public_key'=>env('RECAPTCHA_SITE_KEY'),
        'secret_key'=>env('RECAPTCHA_SECRET_KEY'),
    ]  
]
?>