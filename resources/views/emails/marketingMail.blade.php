<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<style>
.body{
    padding: 20px;
}
.body li{
    list-style: none;
    margin: 10px 0;
}
li span {
    margin: 0 2px;
}
h2{
    margin: 35px 0;
}
p{
    line-height: 30px;
}
.image{
    text-align: center;
    min-width: 60%;
    margin: auto;
}
img{
  width: 100%;  
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
    color: black;
}
</style>
</head>

<body>
    <div class="body">
        <h1>{{ $datas['sujet']}}</h1>
        <p>{{$datas['message1']?? ""}}</p>
        <ul>
          @forelse ($datas['lis'] as $item)
          <li><span>🔥</span><span>{{$item}}</span> </li>  
          @empty
              ""
          @endforelse
        </ul>
       <h2><strong>{{$datas['title']?? ""}}</strong></h2>
       <p>{{$datas->message2?? ""}}</p>
       <div class="image">
        @if ($image['url'])   
        <img src="{{ $image['url']}}" alt="">
        @endif
       </div>
       <hr>
       <p class="text-b">Merci d’avoir choisi {{config('app.name')}} pour améliorer votre avenir !</p>
       <p class="email-text">Cet e-mail a été envoyé à {{$newspaper->email}}
           Vous l'avez reçu parce que vous vous êtes abonné à notre site web.</p>
       <p class="unsubscribe"><a href={{route('unsubscribe.destroy',[$newspaper->token])}}>Se désabonner</a></p>
       <p class="visite"><a href={{config('app.url')}}>Visite le site</a></p>
    </div>
</body>

</html>
