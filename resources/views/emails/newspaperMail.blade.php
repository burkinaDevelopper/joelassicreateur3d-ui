<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <title>Document</title>
<style>
body{
    background: #09122C;
}
main{
    max-width: 80%;
    margin: auto;
    text-align: center;
    border: 3px solid #3f3f41;
    border-radius: 8px;
    padding: 10px;
}
.header{
    display: flex;
    justify-content: center;
}
.header div{
  width: 66px;
}
img{
    width: 100%;
}
h1{
    color: white;
    font-size: 1.2rem;
}
.svg{
    max-width: 70%;
    margin: 0 auto;
}
.text-container{
    text-align: left;
    color: black
    line-height: 28px;
}
.text-b{
    color: #cc2317;
    text-align:  center;
}
.email-text{
    text-align: center;
    margin-top: 20px;
}
.unsubscribe{
    text-align:  center;
    margin-top: 20px;
}
.visite{
    text-align:  center;
    margin-top: 20px;
    color: antiquewhite;
}
.visite a{
    color: antiquewhite;
}
</style>
</head>

<body>
    <main class="main">
        <div class="header">
            <div><img src="{{asset('assets/logo-joel.png')}}" alt=""></div>
            <h1>{{config('app.name')}}</h1>
        </div>
        <div class="svg">
           <img src="{{asset('assets/Lesson-amico.png')}}" alt="">
        </div>
        <div class="text-container">
            <p class="text-welcome">Bienvenue sur {{config('app.name')}}, nous sommes heureux de vous avoir parmi nous.</p>
            <p>
                Vous êtes à présent membre de la communauté {{config('app.name')}}, la plateforme de formation en Rendu 3D, 100% en ligne, qui vous permet d’acquérir de nouvelles compétences visualisation
                3D et assurer votre succès professionnel en apprenant à votre rythme.
            </p>
            <hr>
            <p class="text-b">Merci d’avoir choisi {{config('app.name')}} pour améliorer votre avenir !</p>
            <p class="email-text">Cet e-mail a été envoyé à {{$newspaper->email}}
                Vous l'avez reçu parce que vous vous êtes abonné à notre site web.</p>
            <p class="unsubscribe"><a href={{route('unsubscribe.destroy',[$newspaper->token])}}>Se désabonner</a></p>
            <p class="visite"><a href={{config('app.url')}}>Visite le site</a></p>
        </div>
    </main>
</body>
</html>